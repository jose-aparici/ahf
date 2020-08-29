import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AhfParamsGroupsPage as AhfDevicePage } from 'pages/device/device.page';

import { AppRoutes } from './pages/App.routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoutes.DevicePage} exact component={AhfDevicePage} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
