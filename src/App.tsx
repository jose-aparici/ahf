import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AhfParamsGroupsPage } from 'pages/params-groups/params-groups.page';

import { AppRoutes } from './pages/App.routes';
import { AhfMainPage } from './pages/main/main.page';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoutes.MainPage} exact component={AhfMainPage} />
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
