import { makeStyles, Theme } from '@material-ui/core';

export const useDeviceAppContainerStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: 'black',
  },
  homeButton: {
    marginRight: theme.spacing(2),
    color: 'white',
  },
  title: {
    flexGrow: 1,
  },
}));
