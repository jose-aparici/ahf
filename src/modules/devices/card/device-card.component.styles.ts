import { makeStyles } from '@material-ui/core';

export const useAhfDeviceCardComponentStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  contentContainer: {
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
  infoContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  deviceIconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
}));
