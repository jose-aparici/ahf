import { makeStyles } from '@material-ui/core';

export const useTableComponentStyles = makeStyles(() => ({
  row: {
    width: '100%',
  },
  alertRoot: {
    padding: '0 10px 0 6px',
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
    fontSize: '14px',
  },
  textRight: {
    textAlign: 'end',
  },
}));
