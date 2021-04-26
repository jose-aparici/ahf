import { makeStyles } from '@material-ui/core';

export const useAhfDeviceCardComponentStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  contentContainer: {
    height: '100%',
    cursor: 'pointer',
    padding: '12px 16px 8px 16px',
    '&:last-child': {
      padding: '12px 16px 8px 16px',
    },
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  iconContainer: {
    justifyContent: 'flex-end',
  },
}));
