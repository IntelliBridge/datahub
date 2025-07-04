import { Sidebar } from '@phosphor-icons/react';
import React from 'react';
import styled from 'styled-components';

import { useNavBarContext } from '@app/homeV2/layout/navBarRedesign/NavBarContext';
import { colors } from '@src/alchemy-components';
import { REDESIGN_COLORS } from '@app/entityV2/shared/constants';

const Toggler = styled.button<{ $isCollapsed?: boolean }>`
    cursor: pointer;
    margin: 0 0 0 auto;
    padding: 4px;
    border-radius: 6px;
    border: none;
    display: flex;
    transition: left 250ms ease-in-out;
    transition: background 300ms ease-in;
    background: ${REDESIGN_COLORS.SIDE_BAR};

    &: hover {
        background: ${REDESIGN_COLORS.DARK_GREY};
    }

    & svg {
        height: 20px;
        width: 20px;
        color: ${REDESIGN_COLORS.WHITE};
    }
`;

export default function NavBarToggler() {
    const { toggle } = useNavBarContext();

    return (
        <Toggler onClick={toggle} aria-label="Navbar toggler">
            <Sidebar />
        </Toggler>
    );
}
