import { useSocketHook } from 'hooks/socket-hook';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AppRoutes } from 'pages/App.routes';
import { AhfDevicePage } from 'pages/device/device.page';
import { AhfDevicesPage } from 'pages/devices/devices.page';

const App: React.FC = () => {
  const { init, scan, stopUpdate } = useSocketHook();
  useEffect(() => {
    init();
    stopUpdate();
    scan();
  }, [init, scan, stopUpdate]);
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
