import { makeStyles, Theme } from '@material-ui/core';

import { AHF_COLORS } from '../../../styles/ahf.colors';

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
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: theme.palette.background.default,
    marginRight: '4px',
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    fontSize: '14px',
    width: '25px',
    height: '20px',
    borderRadius: '3px',
  },
  editIcon: {
    marginLeft: 'auto',
    fontSize: '16px',
    color: AHF_COLORS.grey1,
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
