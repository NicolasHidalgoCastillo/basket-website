import { useSelector } from 'react-redux';
import { CssBaseline, StyledEngineProvider, ThemeProvider } from "@mui/material";
import NavigationScroll from 'layout/NavigationScroll';
import { useAppSelector } from 'hooks';
import { FC, ReactNode } from 'react';
// import { ReactNode } from 'react';

interface MyProps {
  children?: any;
}

export const LayoutProvideL: FC<MyProps> = ({ children }) => {
  // const customization = useAppSelector((state) => state.menu);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={[]}>
        <CssBaseline />
        <NavigationScroll>
          {children}
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}