import { createMuiTheme } from '@material-ui/core/styles';

import { AHF_COLORS } from './ahf.colors';

export const ahfTheme = createMuiTheme({
  palette: {
    primary: {
      main: AHF_COLORS.main.primary,
    },
    secondary: {
      main: AHF_COLORS.main.secondary,
    },
  },
});
