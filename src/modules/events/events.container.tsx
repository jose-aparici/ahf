import { useSocketHook } from 'hooks/socket-hook';
import React, { useEffect, useReducer } from 'react';

import { AhfEvent } from 'domain/ahf-event/ahf-event.types';
import { AhfCommand, AhfPayload } from 'domain/ahf/ahf.types';
import { Event } from 'domain/events/events.type';

import { readEventLogFilesReducer } from './reducer_event_logs_files';
import { writeEventsReducer } from './reducer_write_events';
import { AhfSideBarContainer } from './side-bar/side-bar.container';
import { AhfTableComponent } from './table/table.component';

export const WRITE_EVENTS = AhfCommand.WRITE_EVENTS;
export type WRITE_EVENTS = typeof WRITE_EVENTS;

export const EVENT_LOG_FILES = AhfCommand.EVENT_LOG_FILES;
export type EVENT_LOG_FILES = typeof EVENT_LOG_FILES;

export type Action = {
  type: AhfCommand | WRITE_EVENTS | EVENT_LOG_FILES;
  payload: AhfPayload | Event | string[];
};

export interface State {
  event: Event;
  logFiles: string[];
}

export const AhfEventsContainer: React.FC = () => {
  const reducer = (state: State, action: Action): State => {
    const { type, payload } = action;

    switch (type) {
      case WRITE_EVENTS:
        return writeEventsReducer(state, payload as AhfEvent);

      case EVENT_LOG_FILES:
        return readEventLogFilesReducer(state, payload as string[]);

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    event: { fileName: '', logs: [] },
    logFiles: [],
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
