import { makeStyles } from '@material-ui/core';

export const useAhfDeviceCardComponentStyles = makeStyles(() => ({
  contentContainer: {
    cursor: 'pointer',
    padding: '12px 16px 8px 16px',
    '&:last-child': {
      padding: '12px 16px 8px 16px',
    },
    color: 'black',
  },
  infoContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  deviceIconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    minHeight: '40px',
  },
  deviceIcon: {},
}));
