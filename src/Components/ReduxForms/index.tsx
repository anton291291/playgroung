import React from 'react';

import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import { required, email, validateForm } from 'redux-form-validators';

const StyledInput = styled(TextField)`
    && {
        width: 200px;
        margin: 20px;
        border-radius: 5px;

        label {
            color: teal;
        }

        label.Mui-focused {
            color: teal;
        }

        .MuiOutlinedInput-notchedOutline {
            border-color: teal;
        }
        .Mui-focused fieldset {
            border-color: teal;
        }
        .MuiOutlinedInput-root {
            &fieldset {
                border-color: teal;
            }
        }

        &:hover fieldset {
            border-color: teal;
        }
    }
`;

export const validate = validateForm({
    email: [required(), email()]
});


export const renderTextField = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
}) => (
    <StyledInput
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
        variant='outlined'
    />
);
