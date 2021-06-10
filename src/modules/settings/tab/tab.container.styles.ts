import { makeStyles } from '@material-ui/core';

export const useTabContainerStyles = makeStyles(() => ({
  labelContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  label: {
    color: 'black',
    width: '315px',
  },
  labelIcon: {
    fontSize: '16px',
  },
}));
