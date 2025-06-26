import { Skeleton } from 'antd';
import * as React from 'react';
import styled from 'styled-components';

import colors from '@src/alchemy-components/theme/foundations/colors';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 24px 0px 20px 40px;
    overflow: auto;
    flex: 1;
`;

const cardStyle = {
    backgroundColor: colors.secondary[90],
    height: 120,
    minWidth: '98%',
    borderRadius: 8,
    marginBottom: 20,
};

export default function SearchResultsLoadingSection() {
    return (
        <Container>
            <Skeleton.Input active style={cardStyle} />
            <Skeleton.Input active style={cardStyle} />
            <Skeleton.Input active style={cardStyle} />
            <Skeleton.Input active style={cardStyle} />
            <Skeleton.Input active style={cardStyle} />
        </Container>
    );
}

