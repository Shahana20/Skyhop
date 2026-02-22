import React, { Suspense } from 'react';
import { SkyhopThemeProvider } from '@skyhop/ui-core';

const FlightSearch = React.lazy(()=> import('flightSearch/FlightSearchApp'));
const Trips = React.lazy(()=> import('trips/TripsApp'))
const App = () => {
    return(
        <SkyhopThemeProvider>
            <FlightSearch />
            <Trips />
        </SkyhopThemeProvider>
    )
}

export default App;