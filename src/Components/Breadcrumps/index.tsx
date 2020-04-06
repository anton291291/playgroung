/* eslint-disable no-nested-ternary */
import React from 'react';
import List from '@material-ui/core/List';
import Link, { LinkProps } from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Route, useLocation } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';

interface ListItemLinkProps extends LinkProps {
    to: string;
    open?: boolean;
}

const breadcrumbNameMap: { [key: string]: string } = {
    '/home': 'Home',
    '/CryptoSign': 'CryptoSign',
    '/BreadcruBmps': 'Breadcrumps',
    '/Swagger': 'Swagger',
    '/Editor': 'Drafts'
};



interface LinkRouterProps extends LinkProps {
    to: string;
    replace?: boolean;
}

const LinkRouter = (props: LinkRouterProps) => (
    <Link {...props} component={RouterLink as any} />
);

export default function RouterBreadcrumbs() {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const location = useLocation();

    return (
        <div>
            <Route>
                {() => {
                    const pathnames = location.pathname
                        .split('/')
                        .filter(x => x);

                    return (
                        <Breadcrumbs aria-label='breadcrumb'>
                            <LinkRouter color='inherit' to='/'>
                                Home
                            </LinkRouter>
                            {pathnames.map((value, index) => {
                                const last = index === pathnames.length - 1;
                                const to = `/${pathnames
                                    .slice(0, index + 1)
                                    .join('/')}`;

                                return last ? (
                                    <Typography color='textPrimary' key={to}>
                                        {breadcrumbNameMap[to]}
                                    </Typography>
                                ) : (
                                    <LinkRouter
                                        color='inherit'
                                        to={to}
                                        key={to}
                                    >
                                        {breadcrumbNameMap[to]}
                                    </LinkRouter>
                                );
                            })}
                        </Breadcrumbs>
                    );
                }}
            </Route>
        </div>
    );
}
