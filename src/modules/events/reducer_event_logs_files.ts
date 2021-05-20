import { State } from './events.container';

export const readEventLogFilesReducer = (
  state: State,
  eventLogFiles: string[],
): State => {
  state.logFiles = eventLogFiles;

  return {
    ...state,
  };
};
