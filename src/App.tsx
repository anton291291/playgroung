import React from 'react';

import { CssBaseline } from '@material-ui/core';

import AppRoutes from './Routes';

const App = () => {
    return (
        <div className='App'>
            <CssBaseline />
            <AppRoutes/>
        </div>
    );
};

export default App;
