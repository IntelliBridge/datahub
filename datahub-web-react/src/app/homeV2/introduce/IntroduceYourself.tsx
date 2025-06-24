import React, { useEffect } from 'react';
import styled from 'styled-components';

import analytics, { EventType } from '@app/analytics';
import { IntroduceYourselfLeftSidebar } from '@app/homeV2/introduce/IntroduceYourselfLeftSidebar';
import { IntroduceYourselfMainContent } from '@app/homeV2/introduce/IntroduceYourselfMainContent';
import colors from '@src/alchemy-components/theme/foundations/colors';

const Container = styled.div`
    display: flex;
    height: 100vh;
    background-color: ${colors.secondary[50]};
`;

export const IntroduceYourself = () => {
    useEffect(() => {
        analytics.event({ type: EventType.IntroduceYourselfViewEvent });
    }, []);

    return (
        <>
            <Container>
                <IntroduceYourselfLeftSidebar />
                <IntroduceYourselfMainContent />
            </Container>
        </>
    );
};
