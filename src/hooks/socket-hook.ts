import { useCallback, useContext } from 'react';
import { Payload } from 'store/actions';
import { AhfContext } from 'store/context';

import { Command } from 'domain/ahf/ahf.types';
import { AhfSocket } from 'services/ahf-socket/ahf-socket.service';

interface SocketHook {
  init: () => void;
  scan: () => void;
  update: (deviceId: string, folderId: string) => void;
  stopUpdate: () => void;
}

export const useSocketHook = (): SocketHook => {
  const { dispatch } = useContext(AhfContext);

  const init = useCallback((): void => {
    AhfSocket.getInstance()
      .asObservable()
      .subscribe((data) => {
        dispatch({ type: data.Cmd as Command, payload: data.Data as Payload });
      });
  }, [dispatch]);

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
