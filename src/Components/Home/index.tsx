import React, { useState } from 'react';

import styled, { css } from 'styled-components';
import {
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
    Box,
    Typography
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { BurgerMenu, Modal, AnimatedCard } from '..';
import { Field, reduxForm } from 'redux-form';
import { renderTextField, validate } from '../ReduxForms';

type Props = {
    active?: boolean;
    handleSubmit: any;
    pristine: any;
    submitting: any;
};

const StyledAppBar = styled(AppBar)`
    && {
        background: mediumseagreen;
    }
`;

const StyledButton = styled.button`
    background: linear-gradient(
        90deg,
        rgba(250, 87, 0, 1) 0%,
        rgba(250, 87, 0, 1) 41%,
        rgba(254, 152, 0, 1) 81%
    );
    background-size: 300% 100%;
    border: 0;
    border-radius: 5px;
    color: white;
    min-width: 100px;
    min-height: 40px;
    font-size: 20px;
    margin: 20px;
    transition: all 1s;

    &:hover {
        background-position: 100% 0;
    }
`;

const StyledDiv = styled.div`
    background-color: #fff;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;

    &:focus {
        outline: none;
    }
`;

const Home: React.FC<Props> = props => {
    const { handleSubmit, pristine, submitting } = props;

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
            <Box
                mt={10}
                display='flex'
                justifyContent='center'
                alignItems='center'
                width='auto'
                flexDirection='column'
            >
                <Modal
                    childrenComponent={
                        <StyledDiv>
                            <Typography variant='h4'>Заголовок</Typography>
                            <p>lorum ipsum lorum ipsumlorum ipsumlorum ipsum</p>
                        </StyledDiv>
                    }
                />
            </Box>
            <Box
                display='flex'
                flexDirection='column'
                alignItems='center'
                width='100%'
            >
                <form
                    onSubmit={handleSubmit(value => {
                        console.log(value);
                    })}
                >
                    <Field
                        name='email'
                        component={renderTextField}
                        label='Email'
                    />
                    <StyledButton disabled={pristine || submitting}>
                        Submit
                    </StyledButton>
                </form>
                <Box mt={5} />
                <AnimatedCard />
                <Box mb={5} />
            </Box>
            <Drawer open={isOpenDrawer} onClose={toogleDrawer(false)}>
                <BurgerMenu openBurgerMenu={toogleDrawer(false)} />
            </Drawer>
        </>
    );
};

export default reduxForm({
    form: 'MaterialUiForm',
    validate
})(Home);
