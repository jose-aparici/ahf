import { makeStyles, Theme } from '@material-ui/core';

export const useAhfDeviceCardComponentStyles = makeStyles((theme: Theme) => ({
  contentContainer: {
    cursor: 'pointer',
    padding: '4px 8px 4px 8px',
    '&:last-child': {
      padding: '4px 8px 4px 8px',
    },
    color: 'black',
  },
  infoContainer: {
    padding: '4px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
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
