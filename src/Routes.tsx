import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TextEditor, CryptoSign, FilePreview, Home } from './Components';

const AppRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route component={TextEditor} path='/Editor' exact />
                <Route component={CryptoSign} path='/Home' exact />
                <Route component={Home} path='/' exact />
                <Route component={FilePreview} path='/Preview' exact />
            </Switch>
        </Router>
    );
};

export default AppRoutes;
