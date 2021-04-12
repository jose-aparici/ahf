import { makeStyles, Theme } from '@material-ui/core';

export const useDevicesContainerStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: '16px 8px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    columnGap: '16px',
    rowGap: '16px',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
    },
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr 1fr',
    },
  },
}));
