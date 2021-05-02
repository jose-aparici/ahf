import { makeStyles, Theme } from '@material-ui/core';

export const useBreadcrumbsComponentStyles = makeStyles((theme: Theme) => ({
  item: {
    color: theme.palette.text.secondary,
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '24px',
    letterSpacing: '0.11 px',
  },
  active: {
    fontWeight: 'bold',
  },
}));
