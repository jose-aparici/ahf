import { makeStyles, Theme } from '@material-ui/core';

export const useAppBarComponentStyles = makeStyles((theme: Theme) => ({
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
