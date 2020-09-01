import { useCallback, useContext } from 'react';
import { AhfContext } from 'store/context';
import {
  DEVICE_INFO,
  DEVICE_PARAM_UPDATE,
  DEVICE_STRUCTURE,
} from 'store/types';

import {
  Command,
  DeviceInfo,
  DeviceParamUpdate,
  DeviceStructure,
} from 'domain/ahf/ahf.types';
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
        switch (data.Cmd) {
          case Command.DEVICE_INFO:
            dispatch({ type: DEVICE_INFO, payload: data.Data as DeviceInfo });
            break;
          case Command.DEVICE_STRUCTURE:
            dispatch({
              type: DEVICE_STRUCTURE,
              payload: data.Data as DeviceStructure,
            });
            break;
          case Command.PARAM_UPDATE:
            dispatch({
              type: DEVICE_PARAM_UPDATE,
              payload: data.Data as DeviceParamUpdate,
            });
            break;
        }
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
