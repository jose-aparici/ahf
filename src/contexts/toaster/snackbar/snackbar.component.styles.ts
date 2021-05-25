import { makeStyles, Theme } from '@material-ui/core';

export const useSnackBarComponentStyles = makeStyles((theme: Theme) => ({
  root: {
    bottom: '4px',
    left: '135px',
    zIndex: theme.zIndex.drawer + 2000,
  },
  alert: {
    height: '36px',
  },
  alertMessage: {
    paddingTop: '1px',
  },
  alertIcon: {
    padding: '0',
    marginRight: '6px',
  },
}));
