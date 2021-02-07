import { makeStyles, Theme } from '@material-ui/core';

export const useDevicesContainerStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    columnGap: '8px',
    rowGap: '8px',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
      rowGap: '4px',
    },
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr 1fr',
      rowGap: '4px',
    },
  },
  contentContainer: {
    cursor: 'pointer',
    padding: '4px 8px 4px 8px',
    '&:last-child': {
      padding: '4px 8px 4px 8px',
    },
  },
  infoContainer: {
    padding: '4px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  avatar: {
    backgroundColor: 'black',
    marginRight: '4px',
  },
  unitContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  value: {
    textAlign: 'center',
    fontSize: '40px',
    [theme.breakpoints.down('md')]: {
      fontSize: '32px',
    },
  },
  unit: {
    fontSize: '20px',
  },
}));
