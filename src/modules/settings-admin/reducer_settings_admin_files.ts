import { AhfSettingsAdminFileList } from 'domain/ahf-settings-admin/ahf-settings-admin.types';
import { AhfCommand } from 'domain/ahf/ahf.types';
import { Action, AppCommand } from 'domain/app/app.types';

import { State } from './settings-admin.container';

export const settingsAdminFilesReducer = (
  state: State,
  action: Action,
): State => {
  const { type, payload } = action;
  debugger;
  switch (type) {
    case AhfCommand.WRITE_PARAMETER_SET_LIST:
      debugger;
      return {
        ...state,
        fileList: payload as AhfSettingsAdminFileList,
      };

    case AppCommand.SETTINGS_ADMIN_CLEAR_FILE_LIST:
      return {
        ...state,
        fileList: [],
      };

    default:
      return state;
  }
};
