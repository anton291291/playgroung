import React from 'react';

import styled from 'styled-components';

import { Editor } from '@tinymce/tinymce-react';

type Props = {};

const TextEditor: React.FC<Props> = props => {
    const {} = props;

    const handleEditorChange = e => {
        console.log('Content was updated:', e.target.getContent());
    };

    return (
        <Editor
            init={{
                height: 500,
                menubar: true,
                languade: 'ru',
                icons_url:
                    'https://fonts.googleapis.com/icon?family=Material+Icons',
                icons: 'material',
                contextmenu: 'link image imagetools table spellchecker',
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                ],
                toolbar:
                    'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help | '
            }}
            onChange={handleEditorChange}
        />
    );
};

export default TextEditor;
