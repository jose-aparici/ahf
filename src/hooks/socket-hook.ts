import { Dispatch, useCallback } from 'react';
import { Subscription } from 'rxjs';

import { AhfAction, AhfCommand, AhfPayload } from 'domain/ahf/ahf.types';
import { AhfSocket } from 'services/ahf-socket/ahf-socket.service';

interface SocketHook {
  init: () => void;
  listen: (dispatch: Dispatch<AhfAction>) => Subscription;
  scan: () => void;
  update: (deviceId: string, folderId: string) => void;
  stopUpdate: () => void;
}

export const useSocketHook = (): SocketHook => {
  const init = useCallback((): void => {
    AhfSocket.getInstance();
  }, []);

  const listen = useCallback((dispatch: Dispatch<AhfAction>): Subscription => {
    return AhfSocket.getInstance()
      .asObservable()
      .subscribe((data) => {
        dispatch({
          type: data.Cmd as AhfCommand,
          payload: data.Data as AhfPayload,
        });
      });
  }, []);

  const scan = useCallback((): void => {
    AhfSocket.getInstance().next({ Cmd: AhfCommand.SCAN });
  }, []);

  const update = useCallback((deviceId: string, folderId: string) => {
    AhfSocket.getInstance().next({
      Cmd: AhfCommand.FOLDER_SELECT,
      Data: { Device: deviceId, Folder: folderId },
    });
  }, []);

  const stopUpdate = useCallback(() => {
    AhfSocket.getInstance().next({
      Cmd: AhfCommand.FOLDER_SELECT,
      Data: { Device: '0', Folder: '0' },
    });
  }, []);

  return { init, listen, scan, update, stopUpdate };
};
