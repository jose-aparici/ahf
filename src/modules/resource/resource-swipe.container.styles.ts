import { makeStyles } from '@material-ui/core';

export const useResourceSwipeContainerStyles = makeStyles(() => ({
  slide: {
    minHeight: '376px',
    width: '100%',
  },
  transition: {
    minHeight: 'inherit',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
