import React, { ReactNode } from 'react';

import { IconButton, SwipeableDrawer } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

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
      <div>
        <IconButton onClick={onToggleSideBar}>
          <CloseIcon />
        </IconButton>
      </div>
      {children}
    </SwipeableDrawer>
  );
};
