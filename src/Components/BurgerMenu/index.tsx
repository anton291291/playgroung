import React from 'react';

import styled from 'styled-components';

import { ListItem, List, ListItemText, ListItemIcon } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFile, faSignature } from '@fortawesome/free-solid-svg-icons';

const StyledDiv = styled.div`
    width: 220px;

    && {
        button:hover {
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
            default:
                break;
        }
    };

    return (
        <StyledDiv role='presentation' onClick={openBurgerMenu}>
            <List dense={true} disablePadding={true}>
                {listItems.map((item, index) => (
                    <>
                        <ListItem
                            key={index}
                            button
                            component='button'
                            divider={true}
                        >
                            <ListItemIcon>
                                {handleSwitchIcons(item)}
                            </ListItemIcon>
                            <ListItemText primary={item} />
                        </ListItem>
                    </>
                ))}
            </List>
        </StyledDiv>
    );
};

BurgerMenu.defaultProps = {
    listItems: ['Home', 'FilePreviewer', 'CryptoSign']
};

export default BurgerMenu;
