import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface ParamTypes {
  folderName: string;
}

export const AhfFolderPage: React.FC = () => {
  const { url } = useRouteMatch();

  return (
    <>
      <div>this is the folder page {`${url}`}</div>
      {/* <Switch>
        <Route exact path={`${url}/:folderName`}>
          <div>this is the folder page {`${url}`}</div>
          <AhfFolderPage />
        </Route>
      </Switch> */}
    </>
  );
};
