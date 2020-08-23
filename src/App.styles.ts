import { makeStyles, Theme } from '@material-ui/core';

export const useAppContainerStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
  },
}));
