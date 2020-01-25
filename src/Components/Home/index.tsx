import React, { useState } from 'react';

import styled from 'styled-components';
import { AppBar, Toolbar, IconButton, Drawer } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { BurgerMenu } from '..';

type Props = {};

const StyledAppBar = styled(AppBar)`
    && {
        background: mediumseagreen;
    }
`;

const Home: React.FC<Props> = props => {
    const {} = props;

    const [isOpenDrawer, setIsOpenDrawer] = useState(false);

    const toogleDrawer = (open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent
    ) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setIsOpenDrawer(open);
    };

    return (
        <>
            <StyledAppBar position='static'>
                <Toolbar variant='dense'>
                    <IconButton
                        edge='start'
                        color='inherit'
                        aria-label='menu'
                        onClick={toogleDrawer(true)}
                    >
                        <Menu />
                    </IconButton>
                </Toolbar>
            </StyledAppBar>
            <Drawer open={isOpenDrawer} onClose={toogleDrawer(false)}>
                <BurgerMenu openBurgerMenu={toogleDrawer(false)} />
            </Drawer>
        </>
    );
};

export default Home;
