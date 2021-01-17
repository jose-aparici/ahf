import React, { ReactNode } from 'react';

import { IconButton, SwipeableDrawer } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

interface Props {
  children: ReactNode;
  isOpen: boolean;
  onToggleSideBar: () => void;
}

export const AhfSideBarComponent: React.FC<Props> = ({
  children,
  isOpen,
  onToggleSideBar,
}: Props) => (
  <SwipeableDrawer
    anchor={'left'}
    open={isOpen}
    onClose={onToggleSideBar}
    onOpen={onToggleSideBar}
  >
    <div>
      <IconButton onClick={onToggleSideBar}>
        <CloseIcon />
      </IconButton>
    </div>
    {children}
  </SwipeableDrawer>
);
