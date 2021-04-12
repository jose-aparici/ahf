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
  typography: {
    h2: {
      fontSize: '24px',
      fontWeight: 'bold',
      letterSpacing: '0.18px',
    },
    h3: {
      fontSize: '18px',
      lineHeight: '20px',
      fontWeight: 'normal',
      letterSpacing: '0.32px',
    },
    h4: {
      fontSize: '16px',
      lineHeight: '1.5',
      fontWeight: 500,
      letterSpacing: '0.12px',
    },
    h5: {
      fontSize: '15px',
      lineHeight: '1.5',
      letterSpacing: '0.09px',
    },
  },
});
