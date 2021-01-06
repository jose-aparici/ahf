import { makeStyles, Theme } from '@material-ui/core';

export const useAppBarComponentStyles = makeStyles((theme: Theme) => ({
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
