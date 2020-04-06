import React, { useState } from 'react';

type Props = {
    url: string;
    title: string;
};

const Link: React.FC<Props> = props => {
    const { url, title } = props;

    const [isstate, setIsState] = useState(false);

    const handleClick = () => {
        alert('Кликнули по ссылке!');
        setIsState(true);
    };

    return (
        <a onClick={handleClick} href={url}>
            {title}
        </a>
    );
};

export default Link;
