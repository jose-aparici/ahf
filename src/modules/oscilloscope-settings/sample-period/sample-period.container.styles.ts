import { makeStyles } from '@material-ui/core';

export const useSamplePeriodContainerStyles = makeStyles(() => ({
  labelContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  label: {
    color: 'black',
  },
  total: {
    paddingLeft: '12px',
  },
}));
