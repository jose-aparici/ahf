import React from 'react';

import { Avatar } from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

import { useNavigationPreviousComponentStyles } from './navigation-previous.component.styles';

interface Props {
  onPrevious: () => void;
}

export const AhfNavigationPreviousComponent: React.FC<Props> = ({
  onPrevious,
}: Props) => {
  const classes = useNavigationPreviousComponentStyles();
  return (
    <Avatar className={classes.root} onClick={onPrevious}>
      <NavigateBeforeIcon fontSize="large"></NavigateBeforeIcon>
    </Avatar>
  );
};
