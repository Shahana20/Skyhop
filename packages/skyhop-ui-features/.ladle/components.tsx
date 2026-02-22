import React from 'react'
import {GlobalProvider} from '@ladle/react'
import {SkyhopThemeProvider} from '@skyhop/ui-core'

interface ProviderProps {
    children: React.ReactNode;
}

export const Provider: GlobalProvider = ({children}: ProviderProps) => {
    return(
        <SkyhopThemeProvider>
            {children}
        </SkyhopThemeProvider>
    );
    
}