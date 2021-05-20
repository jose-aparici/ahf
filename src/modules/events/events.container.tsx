import { useSocketHook } from 'hooks/socket-hook';
import React, { useEffect, useReducer } from 'react';

import { AhfEvent } from 'domain/ahf-event/ahf-event.types';
import { AhfCommand, AhfPayload } from 'domain/ahf/ahf.types';
import { Event } from 'domain/events/events.type';

import { writeEventsReducer } from './reducer_write_events';
import { AhfSideBarContainer } from './side-bar/side-bar.container';
import { AhfTableComponent } from './table/table.component';

export const WRITE_EVENTS = AhfCommand.WRITE_EVENTS;
export type WRITE_EVENTS = typeof WRITE_EVENTS;

export type Action = {
  type: AhfCommand | WRITE_EVENTS;
  payload: AhfPayload | Event;
};

export interface State {
  event: Event;
}

export const AhfEventsContainer: React.FC = () => {
  const reducer = (state: State, action: Action): State => {
    const { type, payload } = action;

    debugger;

    switch (type) {
      case WRITE_EVENTS:
        return writeEventsReducer(state, payload as AhfEvent);

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    event: { fileName: '', logs: [] },
  });

  const { listen } = useSocketHook();

  useEffect(() => {
    listen(dispatch);
  }, [listen]);

  return (
    <>
      <AhfTableComponent rows={state.event.logs} />
      <AhfSideBarContainer />
    </>
  );
};
