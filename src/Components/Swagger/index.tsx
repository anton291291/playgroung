import React from 'react';

import styled from 'styled-components';

import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

type Props = {};

const Swagger: React.FC<Props> = props => {
    const {} = props;

    return (
        <>
        <div className="swagger"></div>
            <SwaggerUI url='https://petstore.swagger.io/v2/swagger.json' />
        </>
    );
};

export default Swagger;
