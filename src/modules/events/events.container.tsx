import { AhfBackdropContext } from 'contexts/backdrop/context';
import { AhfContext } from 'contexts/store/context';
import { useSocketHook } from 'hooks/socket-hook';
import React, { useContext, useEffect, useReducer } from 'react';

import { AhfCommand, AhfPayload } from 'domain/ahf/ahf.types';
import { EventLogFiles } from 'domain/event/events.type';

import { readEventLogFilesReducer } from './reducer_event_logs_files';
import { AhfSideBarContainer } from './side-bar/side-bar.container';
import { AhfTableComponent } from './table/table.component';

export type Action = {
  type: AhfCommand;
  payload: AhfPayload;
};
export interface State {
  logFiles: EventLogFiles;
}

export const AhfEventsContainer: React.FC = () => {
  const { state } = useContext(AhfContext);
  const { closeBackdrop } = useContext(AhfBackdropContext);

  const [, dispatch] = useReducer(readEventLogFilesReducer, {
    logFiles: [],
  });

  const { listen } = useSocketHook();

  useEffect(() => {
    const subscription = listen(dispatch);
    return () => {
      subscription.unsubscribe();
    };
  }, [listen]);

  useEffect(() => {
    state.eventLogs.logs && closeBackdrop();
  }, [state.eventLogs.logs, closeBackdrop]);

  return (
    <>
      <AhfTableComponent rows={state.eventLogs.logs} />
      <AhfSideBarContainer />
    </>
  );
};
