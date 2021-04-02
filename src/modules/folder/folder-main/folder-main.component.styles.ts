import { makeStyles } from '@material-ui/core';

export const useFolderMainComponentStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: '8px',
  },
  containerTitle: {
    fontWeight: 'bold',
    fontSize: '22px',
  },
  parameterTitle: {
    fontSize: '16px',
  },
  parameterValue: {
    fontSize: '16px',
    fontWeight: 'bold',
    justifySelf: 'end',
    marginBottom: '6px',
  },
  deviceIcon: {
    fontSize: '100px',
  },
}));
