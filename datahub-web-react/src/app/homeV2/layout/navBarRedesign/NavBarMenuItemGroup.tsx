import { Menu } from 'antd';
import styled from 'styled-components';
import { colors } from '@src/alchemy-components';

const NavBarMenuItemGroup = styled(Menu.ItemGroup)`
    .ant-menu-item-group-title {
        margin-top: 8px;
        padding: 8px 0;
        color: ${colors.gray[0]};
        font-family: Mulish;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        min-height: 38px;
    }
`;

export default NavBarMenuItemGroup;
