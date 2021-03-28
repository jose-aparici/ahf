import { makeStyles } from '@material-ui/core';

export const useFooterContainerStyles = makeStyles(() => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    position: 'sticky',
    height: '36px',
  },
  toolBar: {
    display: 'flex',
    minHeight: '40px',
  },
  iconsSection: {
    marginLeft: 'auto',
  },
}));
