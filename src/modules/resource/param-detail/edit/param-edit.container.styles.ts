import { makeStyles } from '@material-ui/core';

export const useParamEditContainerStyles = makeStyles(() => ({
  dialogContainer: {
    margin: '8px',
  },
  mainGrid: {
    flex: '1',
    padding: '4px',
  },
  leftContainer: {
    justifyContent: 'center',
  },
  title: {
    padding: 0,
  },
  buttons: {
    padding: 0,
    alignItems: 'flex-end',
  },
  gridList: {
    maxHeight: '400px',
  },
  formControl: {
    height: '100%',
  },
  keyboardContainer: {
    marginTop: 'auto',
  },
  inputField: {
    fontSize: '30px',
  },
}));
