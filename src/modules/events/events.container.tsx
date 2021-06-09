import { AhfBackdropContext } from 'contexts/backdrop/context';
import { AhfContext } from 'contexts/store/context';
import React, { useContext, useEffect, useReducer } from 'react';

import { AppCommand } from 'domain/app/app.types';
import {
  EventLogFiles,
  EventLogsFileNamesCommand,
} from 'domain/event/events.type';
import { useSocketHook } from 'modules/shared/hooks/socket-hook';

import { eventLogFilesReducer } from './reducer_event_logs_files';
import { AhfSideBarContainer } from './side-bar/side-bar.container';
import { AhfTableComponentMemoized } from './table/table.component';

export interface State {
  logFiles: EventLogFiles;
}

export const AhfEventsContainer: React.FC = () => {
  const { state: appState, dispatch: appDispatch } = useContext(AhfContext);
  const { closeBackdrop } = useContext(AhfBackdropContext);

  const [state, dispatch] = useReducer(eventLogFilesReducer, {
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

  const handleClearLogFiles = () => {
    dispatch({ type: EventLogsFileNamesCommand.CLEAR, payload: [] });
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
