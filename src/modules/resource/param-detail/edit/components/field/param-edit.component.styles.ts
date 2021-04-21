import { makeStyles } from '@material-ui/core';

export const useParamEditFieldComponentStyles = makeStyles(() => ({
  radioGroup: {
    paddingLeft: '16px',
  },
  radio: {
    color: 'black',
    '&$checked': {
      color: 'black',
    },
  },
}));
