import { makeStyles, Theme } from '@material-ui/core';

export const useParamComponentStyles = makeStyles((theme: Theme) => ({
  contentContainer: {
    padding: '4px',
    '&:last-child': {
      padding: '4px',
    },
  },
  infoContainer: {
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: 'black',
    marginRight: '4px',
  },
  unitContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  value: {
    textAlign: 'center',
    fontSize: '40px',
    [theme.breakpoints.down('md')]: {
      fontSize: '32px',
    },
  },
  unit: {
    fontSize: '20px',
  },
}));
