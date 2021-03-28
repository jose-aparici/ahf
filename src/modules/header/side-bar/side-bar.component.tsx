import React, { ReactNode } from 'react';

import { SwipeableDrawer } from '@material-ui/core';

import { useSideBarComponentStyles } from './side-bar.component.styles';

interface Props {
  children: ReactNode;
  isOpen: boolean;
  onToggleSideBar: () => void;
}

export const AhfSideBarComponent: React.FC<Props> = ({
  children,
  isOpen,
  onToggleSideBar,
}: Props) => {
  const classes = useSideBarComponentStyles();

  return (
    <SwipeableDrawer
      anchor={'left'}
      open={isOpen}
      onClose={onToggleSideBar}
      onOpen={onToggleSideBar}
      classes={{ paper: classes.root }}
    >
      {children}
    </SwipeableDrawer>
  );
};
