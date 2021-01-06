import { makeStyles } from '@material-ui/core';

export const useAppBarComponentStyles = makeStyles(() => ({
  toolBarContainer: {
    paddingRight: '0',
  },
  navContainer: {
    display: 'flex',
    alignItems: 'baseline',
    width: '100%',
    justifyContent: 'flex-end',
  },
}));
