import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AppRoutes } from 'pages/App.routes';
import { AhfDevicePage } from 'pages/device/device.page';
import { AhfDevicesPage } from 'pages/devices/devices.page';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoutes.MainPage} exact component={AhfDevicesPage} />
        <Route path={AppRoutes.DevicesPage} exact component={AhfDevicesPage} />
        <Route path={AppRoutes.DevicePage} exact component={AhfDevicePage} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
