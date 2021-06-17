import { makeStyles, Theme } from '@material-ui/core';

export const useSpinnerComponentStyles = makeStyles((theme: Theme) => ({
  root: {
    color: '#fff',
  },
  blocking: {
    zIndex: theme.zIndex.drawer + 10000,
  },
  nonBlocking: {
    zIndex: 5,
  },
}));
