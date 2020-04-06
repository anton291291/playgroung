import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
    TextEditor,
    CryptoSign,
    FilePreview,
    Home,
    Swagger,
    Breadcrumps
} from './Components';

const AppRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route component={TextEditor} path='/Editor' exact />
                <Route component={CryptoSign} path='/CryptoSign' exact />
                <Route component={Home} path='/' exact />
                <Route component={FilePreview} path='/FilePreviewer' exact />
                <Route component={Swagger} path='/Swagger' exact />
                <Route component={Breadcrumps} path='/BreadcruBmps' />
            </Switch>
        </Router>
    );
};

export default AppRoutes;
