import { useCallback, useContext } from 'react';
import { AhfContext } from 'store/context';
import { DEV_INFO } from 'store/types';

import { Command, DevInfo } from 'domain/ahf/ahf.types';
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
        switch (data.Cmd) {
          case Command.DEV_INFO:
            dispatch({ type: DEV_INFO, payload: data.Data as DevInfo });
        }
      });
  }, [dispatch]);

  const scan = useCallback((): void => {
    console.log('entra');
    AhfSocket.getInstance().next({ Cmd: Command.SCAN });
  }, []);

  return { init, scan };
};
