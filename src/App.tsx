import React from 'react';
import { Provider } from 'react-redux';

import { CssBaseline } from '@material-ui/core';

import AppRoutes from './Routes';
import { store } from './store';

const App = () => {
    return (
        <Provider store={store}>
            <div className='App'>
                <CssBaseline />
                <AppRoutes />
            </div>
        </Provider>
    );
};

export default App;
