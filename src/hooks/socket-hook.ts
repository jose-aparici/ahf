import { Command } from 'domain/ahf/ahf.types';
import { AhfSocket } from 'services/ahf-socket/ahf-socket.service';

interface SocketHook {
  init: () => void;
  scan: () => void;
}

export const useSocketHook = (): SocketHook => {
  const init = (): void => {
    AhfSocket.getInstance()
      .asObservable()
      .subscribe((data) => console.log(data));
  };

  const scan = (): void => {
    AhfSocket.getInstance().next({ Cmd: Command.SCAN });
  };

  return { init, scan };
};
