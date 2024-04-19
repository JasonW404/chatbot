import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';

const customTheme = (outerTheme) => {
  return createTheme({
    ...outerTheme,
    palette: {
      ...outerTheme.palette,
      primary: {
        main: '#262626',
      },
      notObvious: {
        main: '#525252',
      },
    },
  });

};

export default function MuiThemeWrapper({ children }) {
  const outerTheme = useTheme();

  return (
    <ThemeProvider theme={customTheme(outerTheme)}>
      {children}
    </ThemeProvider>
  )
}