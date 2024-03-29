import { AhfContext } from 'contexts/store/context';
import i18n from 'i18n';
import React, { FC, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { AppBar, Toolbar } from '@material-ui/core';

import { pathToBreadCrumbs } from 'domain/breadcrumbs/breadcrumb.utils';
import { Breadcrumb } from 'domain/breadcrumbs/breadcrumbs.types';
import { getIdsWithChildren } from 'domain/folder/folder.utils';
import { AHF_LANGUAGES } from 'domain/languages/languages.constants';
import { findLanguageByLocale } from 'domain/languages/languages.utils';
import { extractDeviceFromPath } from 'domain/path/path.utils';
import { useSocketHook } from 'modules/shared/hooks/socket-hook';
import { AppRoutes, SETTINGS } from 'pages/App.routes';

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
  const { scan } = useSocketHook();

  const { state } = useContext(AhfContext);
  const location = useLocation();
  const currentLanguage = findLanguageByLocale(AHF_LANGUAGES, i18n.language)
    .position;

  useEffect(() => {
    const deviceId = extractDeviceFromPath(location.pathname);
    if (deviceId !== undefined) {
      if (deviceId === SETTINGS && state.settings) {
        setBreadcrumbs([
          {
            label: state.settings?.label[currentLanguage],
            path: AppRoutes.SettingsPage,
          },
        ]);
      } else {
        setBreadcrumbs(
          pathToBreadCrumbs(
            currentLanguage,
            location.pathname,
            state.devices[+deviceId].paths,
            state.eventLogs.fileName,
            state.settingsAdmin.currentFile?.fileName,
          ),
        );
        setDeviceId(deviceId);
      }
    }
  }, [
    location.pathname,
    deviceId,
    state.devices,
    state.eventLogs.fileName,
    state.settingsAdmin.currentFile,
    state.settings,
    currentLanguage,
  ]);

  const handleToggleSideBar = (): void => setSideBarOpen(!sideBarOpen);

  const handleScan = () => {
    scan();
    state.devices = {};
  };

  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          {location.pathname !== AppRoutes.DevicesPage &&
            location.pathname !== AppRoutes.SettingsPage && (
              <>
                <AhfSideBarButtonComponent
                  onToggleSideBar={handleToggleSideBar}
                />
              </>
            )}

          {location.pathname !== AppRoutes.DevicesPage && breadcrumbs && (
            <AhfBreadcrumbsComponent breadcrumbs={breadcrumbs} />
          )}

          <div className={classes.iconsSection}>
            <AhfNavigationIconsComponent
              onScan={handleScan}
              isDevicesPage={location.pathname === AppRoutes.DevicesPage}
            />
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
                  currentLanguage={currentLanguage}
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
