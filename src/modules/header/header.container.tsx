import React, { FC, useState } from 'react';

import { AhfAppBarComponent } from './app-bar/app-bar.component';
import { useHeaderContainerStyles } from './header.container.styles';
import { AhfSideBarComponent } from './side-bar/side-bar.component';

export const AhfHeaderContainer: FC = () => {
  const classes = useHeaderContainerStyles();
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const handleToggleSideBar = (): void => setSideBarOpen(!sideBarOpen);

  return (
    <div className={classes.root}>
      <AhfAppBarComponent onToggleSideBar={handleToggleSideBar} />
      <AhfSideBarComponent
        isOpen={sideBarOpen}
        onToggleSideBar={handleToggleSideBar}
      />
    </div>
  );
};
