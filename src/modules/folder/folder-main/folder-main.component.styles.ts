import { makeStyles, Theme } from '@material-ui/core';

export const useFolderMainComponentStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    height: '100%',
  },
  container: {
    margin: '14px',
    padding: '8px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
    backgroundColor: 'white',
  },
  containerTitle: {
    fontWeight: 'bold',
    fontSize: '22px',
  },
  parameterTitle: {
    fontSize: '18px',
  },
  parameterValue: {
    fontSize: '18px',
    fontWeight: 'bold',
    justifySelf: 'end',
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
}));
