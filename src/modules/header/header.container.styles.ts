import { makeStyles, Theme } from '@material-ui/core';

export const useHeaderContainerStyles = makeStyles((theme: Theme) => ({
  appBar: {
    boxShadow: `0 0 0 2px ${theme.palette.secondary.main}`,
    position: 'sticky',
    height: '38px',
    zIndex: theme.zIndex.drawer + 1000,
  },
  toolBar: {
    display: 'flex',
    minHeight: '0',
    padding: '8px 16px',
  },
  iconsSection: {
    marginLeft: 'auto',
  },
}));
