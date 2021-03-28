import React, { FC, useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { AhfContext } from 'store/context';

import { AppBar, Toolbar } from '@material-ui/core';

import { pathToBreadCrumbs } from 'domain/breadcrumbs/breadcrumb.utils';
import { Breadcrumb } from 'domain/breadcrumbs/breadcrumbs.types';
import { getIdsWithChildren } from 'domain/folder/folder.utils';
import { AppRoutes } from 'pages/App.routes';

import { AhfBreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { AhfFolderTreeViewComponent } from './folder-tree-view/folder-tree-view.component';
import { useHeaderContainerStyles } from './header.container.styles';
import { AhfNavigationIconsComponent } from './navigation-icons/navigation-icons.component';
import { AhfSideBarButtonComponent } from './side-bar-button/side-bar-button.component';
import { AhfSideBarComponent } from './side-bar/side-bar.component';

interface ParamTypes {
  deviceId: string;
}
export const AhfHeaderContainer: FC = () => {
  const classes = useHeaderContainerStyles();
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>();
  const { state } = useContext(AhfContext);
  const location = useLocation();
  const { deviceId } = useParams<ParamTypes>();

  useEffect(() => {
    setBreadcrumbs(pathToBreadCrumbs(location.pathname));
  }, [location.pathname]);

  const handleToggleSideBar = (): void => setSideBarOpen(!sideBarOpen);
  console.log('deviceId', deviceId);

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
            {true && state.devices[1] && state.devices[1].structure && (
              <AhfFolderTreeViewComponent
                device={state.devices[1]}
                foldersExpandedIds={getIdsWithChildren(
                  state.devices[1].structure,
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
