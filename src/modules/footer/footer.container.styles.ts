import { makeStyles, Theme } from '@material-ui/core';

export const useFooterContainerStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    top: 'auto',
    bottom: 0,
    position: 'sticky',
    height: '36px',
    padding: '0 24px',
  },
  text: {
    color: theme.palette.text.secondary,
  },
}));
