import { AhfEventLogFiles } from 'domain/ahf-event/ahf-event.types';
import { AhfCommand } from 'domain/ahf/ahf.types';
import { Action } from 'domain/app/app.types';

import { State } from './events.container';

export const eventLogFilesReducer = (state: State, action: Action): State => {
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
};
