import { makeStyles, Theme } from '@material-ui/core';

export const useHeaderContainerStyles = makeStyles((theme: Theme) => ({
  appBar: {
    boxShadow: `0 0 0 2px ${theme.palette.secondary.main}`,
    position: 'sticky',
    height: '36px',
  },
  toolBar: {
    display: 'flex',
    minHeight: '0',
  },
  iconsSection: {
    marginLeft: 'auto',
  },
}));
