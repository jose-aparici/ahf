import { makeStyles } from '@material-ui/core';

export const useSideBarComponentStyles = makeStyles(() => ({
  iconsRoot: {
    display: 'flex',
    flexDirection: 'column',
    margin: '16px',
    height: '100%',
    overflow: 'auto',
  },
  iconsSection: {
    display: 'flex',
    flexDirection: 'column',
  },
  iconsSectionTitle: {
    marginBottom: '8px',
  },
}));
