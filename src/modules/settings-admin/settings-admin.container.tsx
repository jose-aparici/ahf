import { AhfBackdropContext } from 'contexts/backdrop/context';
import { AhfContext } from 'contexts/store/context';
import React, { useContext, useEffect, useReducer } from 'react';

import { AhfSettingsAdminFileList } from 'domain/ahf-settings-admin/ahf-settings-admin.types';
import { AppCommand } from 'domain/app/app.types';
import { useSocketHook } from 'modules/shared/hooks/socket-hook';

import { settingsAdminFilesReducer } from './reducer_settings_admin_files';
import { AhfSideBarContainer } from './side-bar/side-bar.container';

export interface State {
  fileList: AhfSettingsAdminFileList;
}

export const AhfSettingsAdminContainer: React.FC = () => {
  const { state: appState, dispatch: appDispatch } = useContext(AhfContext);

  const [state, dispatch] = useReducer(settingsAdminFilesReducer, {
    fileList: [],
  });

  const { closeBackdrop } = useContext(AhfBackdropContext);

  const { listen } = useSocketHook();

  useEffect(() => {
    const subscription = listen(dispatch);
    return () => {
      subscription.unsubscribe();
    };
  }, [listen]);

  useEffect(() => {
    appState.settingsAdmin.currentFile?.parameterSet &&
      appState.settingsAdmin.currentFile?.parameterSet.length > 0 &&
      closeBackdrop();
  }, [appState.settingsAdmin.currentFile, closeBackdrop]);

  const handleClearFileList = () => {
    dispatch({ type: AppCommand.SETTINGS_ADMIN_CLEAR_FILE_LIST, payload: [] });
  };

  return (
    <>
      <AhfSideBarContainer
        fileList={state.fileList}
        onClearFileList={handleClearFileList}
      />
    </>
  );
};
