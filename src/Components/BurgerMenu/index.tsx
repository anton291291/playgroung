import React from 'react';

import styled from 'styled-components';

import { ListItem, List, ListItemText, ListItemIcon } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faFile,
    faSignature,
    faShareAltSquare
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const StyledDiv = styled.div`
    width: 220px;

    && {
        a:hover {
            background-color: mediumseagreen;
        }
    }
`;

type Props = {
    listItems?: Array<string>;
    openBurgerMenu: (
        event:
            | React.KeyboardEvent<Element>
            | React.MouseEvent<Element, MouseEvent>
    ) => void;
};

const BurgerMenu: React.FC<Props> = props => {
    const { listItems, openBurgerMenu } = props;

    const handleSwitchIcons = (item: string) => {
        switch (item) {
            case 'Home':
                return <FontAwesomeIcon size='lg' icon={faHome} />;
                break;
            case 'FilePreviewer':
                return <FontAwesomeIcon size='lg' icon={faFile} />;
                break;
            case 'CryptoSign':
                return <FontAwesomeIcon size='lg' icon={faSignature} />;
            case 'Swagger':
                return <FontAwesomeIcon size='lg' icon={faShareAltSquare} />;
            default:
                break;
        }
    };

    return (
        <StyledDiv role='presentation' onClick={openBurgerMenu}>
            <List dense={true} disablePadding={true}>
                {listItems.map((item, index) => (
                    <ListItem
                        key={index}
                        button
                        component={Link}
                        to={`/${item}`}
                        divider={true}
                    >
                        <ListItemIcon>{handleSwitchIcons(item)}</ListItemIcon>
                        <ListItemText primary={item} />
                    </ListItem>
                ))}
            </List>
        </StyledDiv>
    );
};

BurgerMenu.defaultProps = {
    listItems: [' ', 'FilePreviewer', 'CryptoSign', 'Swagger']
};

export default BurgerMenu;
