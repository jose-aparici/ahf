import { makeStyles } from '@material-ui/core';

export const useParamEditContainerStyles = makeStyles(() => ({
  dialogContainer: {
    margin: '8px',
    maxWidth: '695px',
  },
  mainGrid: {
    padding: '4px',
    minHeight: '120px',
    flexWrap: 'nowrap',
  },
  leftGrid: {
    padding: '4px',
  },
  leftContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    padding: 0,
  },
  error: {
    color: '#f44336',
  },
  buttons: {
    padding: '16px 0 0 0',
    alignItems: 'flex-end',
  },
  rightGrid: {
    paddingBottom: '2px',
  },
  gridList: {
    maxHeight: '400px',
    height: '100%',
  },
  formControl: {
    height: '100%',
    justifyContent: 'space-between',
  },
  keyboardContainer: {
    width: '600px',
  },
  inputField: {
    fontSize: '30px',
  },
}));
