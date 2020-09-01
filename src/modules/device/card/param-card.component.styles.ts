import { makeStyles } from '@material-ui/core';

export const useParamCardComponentStyles = makeStyles(() => ({
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
  },
  unit: {
    fontSize: '20px',
  },
}));
