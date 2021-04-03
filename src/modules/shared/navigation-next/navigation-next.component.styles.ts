import { makeStyles } from '@material-ui/core';

export const useNavigationNextComponentStyles = makeStyles(() => ({
  root: {
    position: 'fixed',
    top: '50%',
    right: 0,
    transform: 'translateY(-50%)',
    opacity: '0.3',
  },
}));
