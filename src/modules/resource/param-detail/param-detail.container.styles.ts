import { makeStyles, Theme } from '@material-ui/core';

export const useParamDetailContainerStyles = makeStyles((theme: Theme) => ({
  gridContainer: {
    minHeight: '81vh',
  },
  cardContainer: {
    minHeight: '100%',
  },
  cardHeader: {
    paddingBottom: '0',
  },
  avatar: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    width: '40px',
    height: '32px',
    borderRadius: '3px',
  },
  title: {
    color: theme.palette.primary.main,
  },
  description: {
    marginTop: '16px',
  },
  label: {
    color: 'black',
  },
  value: {
    fontSize: '18px',
  },
}));
