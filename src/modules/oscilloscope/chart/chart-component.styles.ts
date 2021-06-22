import { makeStyles, Theme } from '@material-ui/core';

export const useChartComponentStyles = makeStyles((theme: Theme) => ({
  content: {
    maxHeight: 360,
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 30,
    marginRight: 30,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 290,
  },
}));
