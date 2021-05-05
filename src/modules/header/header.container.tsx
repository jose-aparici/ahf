import { AhfContext } from 'contexts/store/context';
import React, { FC, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { AppBar, Toolbar } from '@material-ui/core';

import { pathToBreadCrumbs } from 'domain/breadcrumbs/breadcrumb.utils';
import { Breadcrumb } from 'domain/breadcrumbs/breadcrumbs.types';
import { getIdsWithChildren } from 'domain/folder/folder.utils';
import { extractDeviceFromPath } from 'domain/path/path.utils';
import { AppRoutes } from 'pages/App.routes';

import { AhfBreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { AhfFolderTreeViewComponent } from './folder-tree-view/folder-tree-view.component';
import { useHeaderContainerStyles } from './header.container.styles';
import { AhfNavigationIconsComponent } from './navigation-icons/navigation-icons.component';
import { AhfSideBarButtonComponent } from './side-bar-button/side-bar-button.component';
import { AhfSideBarComponent } from './side-bar/side-bar.component';

export const AhfHeaderContainer: FC = () => {
  const classes = useHeaderContainerStyles();
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>();
  const [deviceId, setDeviceId] = useState<string>();

  const { state } = useContext(AhfContext);
  const location = useLocation();

  useEffect(() => {
    setBreadcrumbs(pathToBreadCrumbs(location.pathname));
    setDeviceId(extractDeviceFromPath(location.pathname));
  }, [location.pathname]);

  const handleToggleSideBar = (): void => setSideBarOpen(!sideBarOpen);

  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          {location.pathname !== AppRoutes.DevicesPage && (
            <>
              <AhfSideBarButtonComponent
                onToggleSideBar={handleToggleSideBar}
              />

              {breadcrumbs && (
                <AhfBreadcrumbsComponent breadcrumbs={breadcrumbs} />
              )}
            </>
          )}

          <div className={classes.iconsSection}>
            <AhfNavigationIconsComponent />
          </div>
        </Toolbar>
      </AppBar>
      {location.pathname !== AppRoutes.DevicesPage && (
        <>
          <AhfSideBarComponent
            isOpen={sideBarOpen}
            onToggleSideBar={handleToggleSideBar}
          >
            {deviceId &&
              state.devices[+deviceId] &&
              state.devices[+deviceId].structure && (
                <AhfFolderTreeViewComponent
                  device={state.devices[+deviceId]}
                  foldersExpandedIds={getIdsWithChildren(
                    state.devices[+deviceId].structure,
                    [],
                  )}
                  onToggleSideBar={handleToggleSideBar}
                />
              )}
          </AhfSideBarComponent>
        </>
      )}
    </>
  );
};
