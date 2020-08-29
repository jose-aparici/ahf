import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AhfParamsGroupsPage } from 'pages/params-groups/params-groups.page';

import { AppRoutes } from './pages/App.routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path={AppRoutes.ParamsGroupsPage}
          exact
          component={AhfParamsGroupsPage}
        />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
