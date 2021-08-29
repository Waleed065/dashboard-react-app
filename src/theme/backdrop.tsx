import { alpha } from '@material-ui/core/styles';

// ----------------------------------------------------------------------

export default function Backdrop(theme:any) {
  const varLow = alpha(theme.palette.primary.main, 0.3);
  const varHigh = alpha(theme.palette.grey[500], 0.8);

  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: [
            `rgb(22,28,36)`,
            `-moz-linear-gradient(75deg, ${varLow} 0%, ${varHigh} 100%)`,
            `-webkit-linear-gradient(75deg, ${varLow} 0%, ${varHigh} 100%)`,
            `linear-gradient(75deg, ${varLow} 0%, ${varHigh} 100%)`
          ],
          '&.MuiBackdrop-invisible': {
            background: 'transparent'
          }
        }
      }
    }
  };
}
