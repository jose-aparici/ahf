import { makeStyles, Theme } from '@material-ui/core';

export const useAhfPageStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    background: theme.palette.background.default,
  },
  container: {
    padding: '8px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
}));
