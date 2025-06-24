import { Icon } from '@components';
import { Typography } from 'antd';
import React from 'react';
import styled from 'styled-components/macro';
import colors from '@src/alchemy-components/theme/foundations/colors';

const ExploreForEntity = styled.span`
    font-weight: light;
    font-size: 16px;
    padding: 5px 0;
`;

const ExploreForEntityText = styled.span`
    margin-left: 10px;
`;

const ViewAllContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: ${colors.primary[10]};
`;

const ReturnKey = styled(Typography.Text)`
    & kbd {
        border: none;
    }
    font-size: 12px;
`;

function ViewAllSearchItem({ searchTarget: searchText }: { searchTarget?: string }) {
    return (
        <ViewAllContainer>
            <ExploreForEntity>
                <Icon icon="MagnifyingGlass" source="phosphor" />
                <ExploreForEntityText>
                    View all results for <Typography.Text strong style={{ color: colors.primary[10] }}>{searchText}</Typography.Text>
                </ExploreForEntityText>
            </ExploreForEntity>
            <ReturnKey keyboard disabled style={{ color: colors.primary[10] }}>
                ⮐ return
            </ReturnKey>
        </ViewAllContainer>
    );
}

export default ViewAllSearchItem;
