import { makeStyles, Theme } from '@material-ui/core';

export const useSideBarContainerStyles = makeStyles((theme: Theme) => ({
  swipeArea: {
    backgroundColor: theme.palette.background.default,
  },
  toolBarTop: {
    minHeight: '38px',
  },
  toolBarBottom: {
    minHeight: '36px',
  },
}));
