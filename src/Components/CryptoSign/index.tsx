import React, { useEffect, useRef, useState } from 'react';

import styled from 'styled-components';
import { Grid, Select, Button, Box, TextField } from '@material-ui/core';
import { GetApp } from '@material-ui/icons';

type Props = {};

const StyledSelect = styled(Select)`
    height: 31px;
`;

const CryptoSign: React.FC<Props> = props => {
    const {} = props;

    const selectRef = useRef<HTMLDivElement | null>(null);

    const saveFile = () => {
        const file = new File(['penis'], 'test.pdf');

        const url = URL.createObjectURL(file);

        const anchor = document.createElement('a');
        document.body.append(anchor);
        anchor.href = url;
        anchor.download = 'test.docx';
        anchor.click();
        URL.revokeObjectURL(url);
        document.removeChild(anchor);
    };

    return (
        <Box mt={2}>
            <Grid container justify='center' alignItems='center' spacing={1}>
                <Grid item container alignContent='center' xs={5}>
                    <StyledSelect
                        variant='outlined'
                        fullWidth={true}
                        ref={selectRef}
                    />
                </Grid>
                <Grid
                    item
                    container
                    justify='center'
                    alignContent='center'
                    xs={2}
                >
                    <Button
                        color='primary'
                        variant='contained'
                        size='small'
                        fullWidth={true}
                    >
                        Подписать
                    </Button>
                </Grid>
                <Grid item container justify='center' xs={7}>
                    <TextField
                        fullWidth={true}
                        multiline
                        rows={7}
                        variant='outlined'
                        disabled
                    />
                </Grid>
                <Grid item xs={7}>
                    <Button
                        variant='contained'
                        color='primary'
                        size='small'
                        onClick={saveFile}
                    >
                        <GetApp />
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CryptoSign;
