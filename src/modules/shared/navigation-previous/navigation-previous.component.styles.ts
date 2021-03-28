import { makeStyles } from '@material-ui/core';

export const useNavigationPreviousComponentStyles = makeStyles(() => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: 0,
    transform: 'translateY(-50%)',
    opacity: '0.3',
  },
}));
