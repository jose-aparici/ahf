import { makeStyles, Theme } from '@material-ui/core';

export const useParamDetailContainerStyles = makeStyles((theme: Theme) => ({
  gridContainer: {
    minHeight: '81vh',
  },
  cardContainer: {
    minHeight: '100%',
  },
  avatar: {
    backgroundColor: theme.palette.background.default,
    marginRight: '12px',
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    width: '50px',
    height: '50px',
  },
  description: {
    marginTop: '16px',
  },

  valueLabel: {
    color: 'black',
  },
}));
