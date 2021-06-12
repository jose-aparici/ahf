import React, { useEffect, useReducer } from 'react';

import { AhfSettingsAdminFileList } from 'domain/ahf-settings-admin/ahf-settings-admin.types';
import { useSocketHook } from 'modules/shared/hooks/socket-hook';

import { settingsAdminFilesReducer } from './reducer_settings_admin_files';
import { AhfSideBarContainer } from './side-bar/side-bar.container';

export interface State {
  fileList: AhfSettingsAdminFileList;
}

export const AhfSettingsAdminContainer: React.FC = () => {
  const [state, dispatch] = useReducer(settingsAdminFilesReducer, {
    fileList: [],
  });

  const { listen } = useSocketHook();

  useEffect(() => {
    const subscription = listen(dispatch);
    return () => {
      subscription.unsubscribe();
    };
  }, [listen]);

  return (
    <>
      <AhfSideBarContainer></AhfSideBarContainer>
    </>
  );
};
