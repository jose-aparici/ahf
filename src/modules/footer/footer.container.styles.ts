import { makeStyles } from '@material-ui/core';

export const useFooterContainerStyles = makeStyles(() => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    position: 'sticky',
  },
  toolBar: {
    display: 'flex',
    minHeight: '0',
  },
  iconsSection: {
    marginLeft: 'auto',
  },
}));