import { makeStyles } from '@material-ui/core';

export const useFolderMainComponentStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginTop: '12px',
  },
  paper: {
    padding: '12px 10px 4px 10px',
  },
  containerTitle: {
    fontWeight: 'bold',
  },
  parameterValue: {
    fontWeight: 'bold',
    justifySelf: 'end',
    marginBottom: '6px',
  },
  deviceIcon: {
    fontSize: '100px',
  },
}));
