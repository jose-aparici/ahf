import { makeStyles } from '@material-ui/core';

export const useFoldersContainerStyles = makeStyles(() => ({
  closeButton: {
    display: 'flex',
    flexDirection: 'column',
    width: 'min-content',
    position: 'fixed',
    alignSelf: 'flex-end',
  },
}));
