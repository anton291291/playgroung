import React from 'react';

import styled from 'styled-components';

import { FilePreviewer } from 'react-file-viewer';

type Props = {};

const FilePreview: React.FC<Props> = props => {
    const {} = props;

    const file = '/public/4-software_lifecycle_models.pdfnp';
    const type = 'png';

    return <FilePreviewer fileType={type} filePath={file} />;
};

export default FilePreview;
