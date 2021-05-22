import { Action } from 'contexts/store/actions';

import { AhfEventLogFiles } from 'domain/ahf-event/ahf-event.types';
import { AhfCommand } from 'domain/ahf/ahf.types';

import { State } from './events.container';

export const readEventLogFilesReducer = (
  state: State,
  action: Action,
): State => {
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
