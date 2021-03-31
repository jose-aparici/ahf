import { makeStyles } from '@material-ui/core';

export const useFolderMainComponentStyles = makeStyles(() => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    height: '100%',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
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
  parameterLeft: {
    justifySelf: 'start',
  },
  fullCell: {
    gridColumn: 'span 7',
  },
  twoCells: {
    gridColumn: 'span 2',
  },
  threeCells: {
    gridColumn: 'span 3',
  },
  deviceIconContainer: {
    justifySelf: 'end',
  },
  deviceIcon: {
    fontSize: '40px',
  },
}));
