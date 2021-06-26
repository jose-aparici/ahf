import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

import { AhfMessage } from 'domain/ahf/ahf.types';
import { AHF_SOCKET_PORT } from 'domain/app/app.constants';

export class AhfSocket {
  private static instance: WebSocketSubject<AhfMessage>;

  private constructor() {}

  static getInstance(): WebSocketSubject<AhfMessage> {
    if (!AhfSocket.instance) {
      AhfSocket.instance = webSocket(
        `ws://${window.location.hostname}:${AHF_SOCKET_PORT}`,
      );
    }
    return AhfSocket.instance;
  }
}
