const MainProvider = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>{children}</NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default MainProvider;
