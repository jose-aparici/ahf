import { makeStyles, Theme } from '@material-ui/core';

export const useFolderCardComponentStyles = makeStyles((theme: Theme) => ({
  cardContainer: {
    marginBottom: '8px',
    minHeight: '60px',
    borderColor: theme.palette.primary.main,
    border: '1px solid',
  },
  contentContainer: {
    padding: '4px',
    '&:last-child': {
      padding: '4px',
    },
    color: 'black',
  },
  name: {
    fontWeight: 'bold',
  },
}));
