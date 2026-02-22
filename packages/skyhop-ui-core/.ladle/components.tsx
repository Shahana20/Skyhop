import React from 'react'
import {SkyhopThemeProvider} from '../src/theme/SkyhopThemeProvider'

interface ProviderProps {
    children: React.ReactNode;
}

export const Provider = ({children}: ProviderProps) => {
    return(
        <SkyhopThemeProvider>
            {children}
        </SkyhopThemeProvider>
    );
    
}