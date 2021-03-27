import { makeStyles, Theme } from '@material-ui/core';

export const useBreadcrumbsContainerStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.text.secondary,
    fontWeight: 'normal',
  },
  active: {
    fontWeight: 'bold',
  },
}));
