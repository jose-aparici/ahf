import { makeStyles } from '@material-ui/core';

export const useParamsContainerStyles = makeStyles(() => ({
  closeButton: {
    display: 'flex',
    flexDirection: 'column',
    width: 'min-content',
    alignSelf: 'flex-end',
  },
}));
