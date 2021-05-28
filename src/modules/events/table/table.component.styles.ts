import { makeStyles } from '@material-ui/core';

export const useTableComponentStyles = makeStyles(() => ({
  row: {
    width: '100%',
  },
  standardSuccess: {
    color: '#1e4620',
  },
  standardInfo: {
    color: '#0d3c61',
  },
  standardWarning: {
    color: '#6a4700',
  },
  standardError: {
    color: '#611a15',
  },
  icon: {
    fontSize: '12px',
  },
  text: {
    fontSize: '12px',
  },
}));
