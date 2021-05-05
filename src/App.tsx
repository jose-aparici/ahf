import { AhfContext } from 'contexts/store/context';
import { useSocketHook } from 'hooks/socket-hook';
import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { AhfFooterContainer } from 'modules/footer/footer.container';
import { AhfHeaderContainer } from 'modules/header/header.container';
import { AppRoutes } from 'pages/App.routes';
import { AhfDevicesPage } from 'pages/devices/devices.page';
import { AhfEventsPage } from 'pages/events/events.page';
import { AhfResourcePage } from 'pages/resource/resource.page';

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
          <Route path={AppRoutes.EventsPage} exact component={AhfEventsPage} />
          <Route path={AppRoutes.ResourcePage} component={AhfResourcePage} />
        </Switch>
        <AhfFooterContainer />
      </BrowserRouter>
    </>
  );
};
export default App;
