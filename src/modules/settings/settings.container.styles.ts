import { makeStyles } from '@material-ui/core';

import { AHF_COLORS } from '../../styles/ahf.colors';

export const useSettingsContainerStyles = makeStyles(() => ({
  root: {
    width: '100%',
    boxShadow: `inset 0 -1px 0 0 ${AHF_COLORS.grey2}`,
  },
  tabRoot: {
    padding: '0',
    minWidth: '0',
  },
  tab: {
    fontSize: '14px',
    lineHeight: '24px',
    fontWeight: 'bold',
    textTransform: 'none',
  },
}));
