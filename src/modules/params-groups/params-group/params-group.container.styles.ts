import { makeStyles } from '@material-ui/core';

export const useParamsGroupContainerStyles = makeStyles(() => ({
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    columnGap: '30px',
    rowGap: '24px',
  },
}));
