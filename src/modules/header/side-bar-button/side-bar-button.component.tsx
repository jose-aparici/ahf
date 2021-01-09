import React from 'react';

import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

interface Props {
  onToggleSideBar: () => void;
}

export const AhfSideBarButtonComponent: React.FC<Props> = ({
  onToggleSideBar,
}: Props) => (
  <IconButton
    color="inherit"
    aria-label="open drawer"
    edge="start"
    onClick={onToggleSideBar}
  >
    <MenuIcon />
  </IconButton>
);
