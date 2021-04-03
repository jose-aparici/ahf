import { makeStyles } from '@material-ui/core';

export const useAhfPageStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    minHeight: '85vh',
    flexDirection: 'column',
  },
  container: {
    padding: '8px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
}));
