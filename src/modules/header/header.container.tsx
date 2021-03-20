import React, { FC, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AhfContext } from 'store/context';

import { AppBar, Toolbar } from '@material-ui/core';

import { pathToBreadCrumbs } from 'domain/breadcrumbs/breadcrumb.utils';
import { Breadcrumb } from 'domain/breadcrumbs/breadcrumbs.types';

import { AhfBreadcrumbs } from './breadcrumbs/breadcrumbs.component';
import { AhfFolderTreeViewComponent } from './folder-tree-view/folder-tree-view.component';
import { useHeaderContainerStyles } from './header.container.styles';
import { AhfNavigationIconsComponent } from './navigation-icons/navigation-icons.component';
import { AhfSideBarButtonComponent } from './side-bar-button/side-bar-button.component';
import { AhfSideBarComponent } from './side-bar/side-bar.component';

export const AhfHeaderContainer: FC = () => {
  const classes = useHeaderContainerStyles();
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>();
  const { state } = useContext(AhfContext);
  const location = useLocation();

  useEffect(() => {
    setBreadcrumbs(pathToBreadCrumbs(location.pathname));
  }, [location.pathname]);

  const handleToggleSideBar = (): void => setSideBarOpen(!sideBarOpen);

  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <AhfSideBarButtonComponent onToggleSideBar={handleToggleSideBar} />

          {/*  <AhfNavigationButtonsComponent /> */}
          {breadcrumbs && <AhfBreadcrumbs breadcrumbs={breadcrumbs} />}
          <div className={classes.iconsSection}>
            <AhfNavigationIconsComponent />
          </div>
        </Toolbar>
      </AppBar>
      <AhfSideBarComponent
        isOpen={sideBarOpen}
        onToggleSideBar={handleToggleSideBar}
      >
        <AhfFolderTreeViewComponent
          devices={state.devices}
          onToggleSideBar={handleToggleSideBar}
        />
      </AhfSideBarComponent>
    </>
  );
};
