import React, { useEffect, Component, Props } from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { lightTheme, darkTheme, IThemeWrapper } from '../utils/themes';
import { useObservable } from "../utils/observableHook";
import { themeService } from "../services/services";
import { Header } from './Header';

const GlobalStyle = createGlobalStyle<IThemeWrapper>`
  body {
    margin: 0 auto;
    background-color: ${props => props.theme.body}; 
  }
`

const Layout = (props: any) => {

    /**
     * This is the observed theme allowing realtime change.
     **/
    const themeServed = useObservable(themeService.theme);

    useEffect(() => {
        // Checks if there is a theme to load
        const localTheme = window.localStorage.getItem('theme');
        if (localTheme) {
            themeService.setTheme(localTheme);
        }
    }, []);

    return(
        <ThemeProvider theme={themeServed}>
            <GlobalStyle/>
            <Header />
            <>
                {props.children}
            </>
        </ThemeProvider>
    );
}

export default Layout;