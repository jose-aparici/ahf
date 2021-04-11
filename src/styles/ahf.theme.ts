import { createMuiTheme } from '@material-ui/core/styles';

import { AHF_COLORS } from './ahf.colors';

export const ahfTheme = createMuiTheme({
  palette: {
    primary: {
      main: AHF_COLORS.palette.main.primary,
    },
    secondary: {
      main: AHF_COLORS.palette.main.secondary,
    },
    background: {
      default: AHF_COLORS.palette.background,
    },
    text: {
      primary: AHF_COLORS.palette.text.primary,
      secondary: AHF_COLORS.palette.text.secondary,
    },
  },
});
