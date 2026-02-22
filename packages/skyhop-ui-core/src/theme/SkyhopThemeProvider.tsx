import React from "react";
import { theme } from "./theme";
import { CssBaseline, Theme, ThemeProvider } from "@mui/material";

export interface SkyhopProviderProps {
    children: React.ReactNode;
}

export const SkyhopThemeProvider = ({children}: SkyhopProviderProps) => {
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    );
}