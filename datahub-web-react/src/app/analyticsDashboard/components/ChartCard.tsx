import { Card } from 'antd';
import styled from 'styled-components';
import colors from '@src/alchemy-components/theme/foundations/colors';

export const ChartCard = styled(Card) <{ $shouldScroll: boolean }>`
    margin: 12px;
    background-color: ${colors.secondary[90]};
    color: white;
    box-shadow: ${(props) => props.theme.styles['box-shadow']};
    height: 440px;
    overflow-y: ${(props) => (props.$shouldScroll ? 'scroll' : 'hidden')};
`;
