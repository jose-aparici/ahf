import { makeStyles, Theme } from '@material-ui/core';

export const useAhfPageStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    background: theme.palette.background.default,
  },
  container: {
    padding: '64px 0px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    [theme.breakpoints.down('md')]: {
      padding: '64px 40px',
    },
    [theme.breakpoints.only('xs')]: {
      padding: '32px 15px',
    },
  },
}));
