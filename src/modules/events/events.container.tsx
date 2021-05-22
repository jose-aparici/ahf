import { AhfContext } from 'contexts/store/context';
import { useSocketHook } from 'hooks/socket-hook';
import React, { useContext, useEffect, useReducer } from 'react';

import { AhfEventLogFiles } from 'domain/ahf-event/ahf-event.types';
import { AhfCommand, AhfPayload } from 'domain/ahf/ahf.types';
import { EventLogFiles } from 'domain/event/events.type';

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
  const [, dispatch] = useReducer(
    (state: State, action: Action): State => {
      const { type, payload } = action;
      switch (type) {
        case AhfCommand.EVENT_LOG_FILES:
          return {
            ...state,
            logFiles: payload as AhfEventLogFiles,
          };
        default:
          return state;
      }
    },
    {
      logFiles: [],
    },
  );

  const { listen } = useSocketHook();

  useEffect(() => {
    const subscription = listen(dispatch);
    return () => {
      subscription.unsubscribe();
    };
  }, [listen]);

  return (
    <>
      <AhfTableComponent rows={state.eventLogs.logs} />
      <AhfSideBarContainer />
    </>
  );
};
