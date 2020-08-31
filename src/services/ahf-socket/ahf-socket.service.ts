import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

import { AhfMessage } from 'domain/ahf/ahf.types';

export class AhfSocket {
  private static instance: WebSocketSubject<AhfMessage>;

  private constructor() {}

  static getInstance(): WebSocketSubject<AhfMessage> {
    if (!AhfSocket.instance) {
      AhfSocket.instance = webSocket(
        `ws://${window.location.hostname}:${process.env.REACT_APP_AHF_SOCKET_PORT}`,
      );
    }
    return AhfSocket.instance;
  }
}
