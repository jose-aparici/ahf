import { makeStyles, Theme } from '@material-ui/core';

export const useSpinnerComponentStyles = makeStyles((theme: Theme) => ({
  root: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));
