import { Input } from 'antd';
import styled from 'styled-components';

import { getColor } from '@components/theme/utils';

import { colors, typography } from '@src/alchemy-components/theme';

export const StyledSearchBar = styled(Input)<{ $width?: string; $height?: string }>`
    height: ${(props) => props.$height};
    width: ${(props) => props.$width};
    display: flex;
    align-items: center;
    border-radius: 8px;
    background-color: ${colors.secondary[50]};
    border: 1px solid ${colors.gray[1800]};

    input {
        color: ${colors.primary[10]};
        background-color: ${colors.secondary[50]};
        font-size: ${typography.fontSizes.md} !important;
    }

    .ant-input-prefix {
        width: 20px;
        color: ${colors.gray[1800]};

        svg {
            height: 16px;
            width: 16px;
        }
    }

    &:hover,
    &:focus,
    &:focus-within {
        border-color: ${colors.primary[30]} !important;
        box-shadow: none !important;
    }
`;
