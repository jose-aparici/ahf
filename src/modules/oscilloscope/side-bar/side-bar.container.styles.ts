import { makeStyles } from '@material-ui/core';

export const useSideBarContainerStyles = makeStyles(() => ({
  swipePaper: {
    width: `255px`,
    overflow: 'visible',
    padding: '0 16px',
  },
  pullerContainer: {
    left: '-20px',
    position: 'absolute',
  },
  toolBarTop: {
    minHeight: '38px',
  },
  toolBarBottom: {
    minHeight: '36px',
  },
}));
