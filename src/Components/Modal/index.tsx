import React, { useState } from 'react';

import styled from 'styled-components';
import {
    Button,
    Modal,
    Backdrop,
    Fade,
    Typography,
    Box,
    Slide
} from '@material-ui/core';

const StyledButton = styled(Button)`
    && {
        background-color: darkorchid;
        transition: all 0.5s;
        color: white;
        width: 150px;
        height: 40px;

        &:hover {
            background-color: purple;
            transform: scale(1.08);
        }
    }
`;

const StyledModal = styled(Modal)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

type Props = { childrenComponent?: React.ReactNode };

const Modalka: React.FC<Props> = props => {
    const { childrenComponent } = props;

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <StyledButton variant='outlined' onClick={handleOpen} size='small'>
                Покажи модалку
            </StyledButton>
            <StyledModal
                aria-labelledby='transition-modal-title'
                aria-describedby='transition-modal-description'
                open={isOpen}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 900
                }}
            >
                <Slide direction='up' in={isOpen} timeout={500}>
                    {childrenComponent}
                </Slide>
            </StyledModal>
        </>
    );
};

export default Modalka;
