import { makeStyles, Theme } from '@material-ui/core';

export const useParamCardComponentStyles = makeStyles((theme: Theme) => ({
  cardContainer: {
    marginBottom: '8px',
  },
  contentContainer: {
    padding: '4px',
    '&:last-child': {
      padding: '4px',
    },
    color: 'black',
  },
  infoContainer: {
    display: 'flex',
  },
  avatar: {
    backgroundColor: theme.palette.background.default,
    marginRight: '4px',
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    width: '32px',
    height: '28px',
  },
  editIcon: {
    marginLeft: 'auto',
  },
  unitContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  value: {
    textAlign: 'center',
    fontSize: '40px',
    fontWeight: 'bold',
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
    },
  },
}));
