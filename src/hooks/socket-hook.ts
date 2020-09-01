import { useCallback, useContext } from 'react';
import { AhfContext } from 'store/context';
import { DEVICE_INFO, DEVICE_STRUCTURE } from 'store/types';

import { Command, DeviceInfo, DeviceStructure } from 'domain/ahf/ahf.types';
import { AhfSocket } from 'services/ahf-socket/ahf-socket.service';

interface SocketHook {
  init: () => void;
  scan: () => void;
}

export const useSocketHook = (): SocketHook => {
  const { dispatch } = useContext(AhfContext);

  const init = useCallback((): void => {
    AhfSocket.getInstance()
      .asObservable()
      .subscribe((data) => {
        console.log(data);
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
        }
      });
  }, [dispatch]);

  const scan = useCallback((): void => {
    console.log('entra');
    AhfSocket.getInstance().next({ Cmd: Command.SCAN });
  }, []);

  return { init, scan };
};
