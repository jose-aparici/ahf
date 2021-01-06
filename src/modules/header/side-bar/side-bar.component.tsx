import React from 'react';

import { Divider, Drawer, IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

interface Props {
  isOpen: boolean;
  onSideBarClose: () => void;
}

export const AhfSideBarComponent: React.FC<Props> = ({
  isOpen,
  onSideBarClose,
}: Props) => (
  <Drawer variant="persistent" anchor="left" open={isOpen}>
    <div>
      <IconButton onClick={onSideBarClose}>
        <ChevronLeftIcon />
      </IconButton>
    </div>
    <Divider />
  </Drawer>
);
