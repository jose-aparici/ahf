import { makeStyles } from '@material-ui/core';

export const useMainContainerStyles = makeStyles(() => ({
  container: {
    marginTop: '12px',
  },
  paper: {
    padding: '12px 10px 4px 10px',
    minHeight: '360px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  paperLeft: {
    marginRight: '5px',
  },
  paperRight: {
    marginLeft: '5px',
  },
}));
