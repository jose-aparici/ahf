import { makeStyles, Theme } from '@material-ui/core';

export const useBreadcrumbsComponentStyles = makeStyles((theme: Theme) => ({
  item: {
    color: theme.palette.text.secondary,
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '24px',
    letterSpacing: '0.11px',
  },
  separator: {
    margin: '4px',
  },
  active: {
    fontWeight: 'bold',
    textDecoration: 'none',
  },
}));
