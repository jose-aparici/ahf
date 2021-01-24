import { useSocketHook } from 'hooks/socket-hook';
import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { AhfContext } from 'store/context';

import { AhfHeaderContainer } from 'modules/header/header.container';
import { AppRoutes } from 'pages/App.routes';
import { AhfDevicePage } from 'pages/device/device.page';
import { AhfDevicesPage } from 'pages/devices/devices.page';
import { AhfFoldersPage } from 'pages/folders/folders.page';
import { AhfParamPage } from 'pages/param/param.page';

const App: React.FC = () => {
  const { init, listen, scan, stopUpdate } = useSocketHook();
  const { dispatch } = useContext(AhfContext);

  useEffect(() => {
    init();
    stopUpdate();
    listen(dispatch);
    scan();
  }, [init, listen, scan, stopUpdate, dispatch]);
  return (
    <>
      <BrowserRouter>
        <AhfHeaderContainer />
        <Switch>
          <Route path={AppRoutes.MainPage} exact>
            <Redirect to={AppRoutes.DevicesPage} />
          </Route>
          <Route
            path={AppRoutes.DevicesPage}
            exact
            component={AhfDevicesPage}
          />
          <Route path={AppRoutes.DevicePage} exact component={AhfDevicePage} />
          <Route
            path={AppRoutes.FoldersPage}
            exact
            component={AhfFoldersPage}
          />
          <Route path={AppRoutes.ParamPage} exact component={AhfParamPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default App;
