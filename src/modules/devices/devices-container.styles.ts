import { makeStyles } from '@material-ui/core';

export const useDevicesContainerStyles = makeStyles(() => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    columnGap: '30px',
    rowGap: '24px',
  },
  media: {
    height: 140,
  },
}));
