import React from 'react';

import { Avatar } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import { useNavigationNextComponentStyles } from './navigation-next.component.styles';

interface Props {
  onNext: () => void;
}

export const AhfNavigationNextComponent: React.FC<Props> = ({
  onNext,
}: Props) => {
  const classes = useNavigationNextComponentStyles();
  return (
    <Avatar className={classes.root} onClick={onNext}>
      <NavigateNextIcon fontSize="large"></NavigateNextIcon>
    </Avatar>
  );
};
