import MenuItem from 'antd/lib/menu/MenuItem';
import styled from 'styled-components';

export const MenuItemStyle = styled(MenuItem)`
    &&&& {
        background-color: transparent;
        padding: 8px 12px;
        
        a {
            color: inherit;
        }
        
        .ant-btn {
            padding: 0;
            height: auto;
            width: 100%;
            text-align: left;
            border: none;
            background: none;
            color: #fff;
            
            &:hover {
                color: #fff;
                background: none;
            }
        }
    }
`;
