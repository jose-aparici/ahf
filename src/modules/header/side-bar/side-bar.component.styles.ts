import { makeStyles } from '@material-ui/core';

export const useSideBarComponentStyles = makeStyles(() => ({
  root: {
    minWidth: '30%',
    paddingRight: '4px',
    top: '39px',
    height: '85%',
  },
  divider: {
    border: 'none',
    height: '1px',
    margin: 0,
    flexShrink: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
  },
}));
