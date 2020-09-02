import { makeStyles, Theme } from '@material-ui/core';

export const useDeviceCarouselContainerStyles = makeStyles((theme: Theme) => ({
  carouselItemContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    columnGap: '8px',
    rowGap: '8px',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
      rowGap: '4px',
    },
  },
}));
