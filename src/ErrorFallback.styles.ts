import { makeStyles } from '@material-ui/core';

export const useAhfErrorFallbackStyles = makeStyles(() => ({
  root: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  buttonGrid: {
    marginTop: '12px',
  },
  replayIcon: {
    marginRight: '8px',
  },
}));
