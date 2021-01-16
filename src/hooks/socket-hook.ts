import { Dispatch, useCallback } from 'react';
import { Subscription } from 'rxjs';

import { Command } from 'domain/ahf/ahf.types';
import { AhfAction, AhfPayload } from 'domain/context/context.types';
import { AhfSocket } from 'services/ahf-socket/ahf-socket.service';

interface SocketHook {
  init: (dispatch: Dispatch<AhfAction>) => Subscription;
  scan: () => void;
  update: (deviceId: string, folderId: string) => void;
  stopUpdate: () => void;
}

export const useSocketHook = (): SocketHook => {
  const init = useCallback((dispatch: Dispatch<AhfAction>): Subscription => {
    return AhfSocket.getInstance()
      .asObservable()
      .subscribe((data) => {
        dispatch({
          type: data.Cmd as Command,
          payload: data.Data as AhfPayload,
        });
      });
  }, []);

  const scan = useCallback((): void => {
    AhfSocket.getInstance().next({ Cmd: Command.SCAN });
  }, []);

  const update = useCallback((deviceId: string, folderId: string) => {
    AhfSocket.getInstance().next({
      Cmd: Command.FOLDER_SELECT,
      Data: { Device: deviceId, Folder: folderId },
    });
  }, []);

  const stopUpdate = useCallback(() => {
    AhfSocket.getInstance().next({
      Cmd: Command.FOLDER_SELECT,
      Data: { Device: '0', Folder: '0' },
    });
  }, []);

  return { init, scan, update, stopUpdate };
};
