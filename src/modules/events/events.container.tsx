import { AhfBackdropContext } from 'contexts/backdrop/context';
import { AhfContext } from 'contexts/store/context';
import { useSocketHook } from 'hooks/socket-hook';
import React, { useContext, useEffect, useReducer } from 'react';

import { AhfCommand, AhfPayload } from 'domain/ahf/ahf.types';
import { AppCommand } from 'domain/app/app.types';
import { EventLogFiles } from 'domain/event/events.type';

import { readEventLogFilesReducer } from './reducer_event_logs_files';
import { AhfSideBarContainer } from './side-bar/side-bar.container';
import { AhfTableComponentMemoized } from './table/table.component';

export type Action = {
  type: AhfCommand;
  payload: AhfPayload;
};
export interface State {
  logFiles: EventLogFiles;
}

export const AhfEventsContainer: React.FC = () => {
  const { state: appState, dispatch: appDispatch } = useContext(AhfContext);
  const { closeBackdrop } = useContext(AhfBackdropContext);

  const [state, dispatch] = useReducer(readEventLogFilesReducer, {
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
    appState.eventLogs.logs.length > 0 && closeBackdrop();
  }, [appState.eventLogs.logs, closeBackdrop]);

  // const handleClearLogFiles = () => (state.logFiles = []);

  const handleClearLogFiles = () => {
    //dispatch({type: })
  };

  const handleClearEventLogs = () => {
    appDispatch({ type: AppCommand.CHANGE_EVENT_LOG_FILE_NAME, payload: [] });
  };

  return (
    <>
      <AhfTableComponentMemoized rows={appState.eventLogs.logs} />
      <AhfSideBarContainer
        logFiles={state.logFiles}
        onClearLogFiles={handleClearLogFiles}
        onClearEventLogs={handleClearEventLogs}
      />
    </>
  );
};
