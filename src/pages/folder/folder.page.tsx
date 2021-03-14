import React from 'react';

import { AhfFolderContainer } from 'modules/folder/folder.container';

export const AhfFolderPage: React.FC = () => {
  return (
    <>
      <div>this is the folder page </div>
      <AhfFolderContainer />
      {/* <Switch>
        <Route exact path={`${url}/:folderName`}>
          <div>this is the folder page {`${url}`}</div>
          <AhfFolderPage />
        </Route>
      </Switch> */}
    </>
  );
};
