import { makeStyles } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

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
  checkBox: {
    height: '12px',
    color: blue[300],
    '&$checked': {
      color: blue[500],
    },
  },
  checkBoxLabelColor: {
    color: blue[300],
  },
  gridValuesContainer: {
    paddingLeft: '31px',
  },
}));
