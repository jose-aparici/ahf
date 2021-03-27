import { makeStyles, Theme } from '@material-ui/core';

export const useFolderContainerStyles = makeStyles((theme: Theme) => ({
  paramsContainer: {
    margin: '16px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    columnGap: '12px',
    rowGap: '8px',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
    },
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr 1fr 1fr',
    },
  },
}));
