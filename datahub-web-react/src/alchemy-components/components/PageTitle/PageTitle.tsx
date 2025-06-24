import React from 'react';
import styled from 'styled-components';

import { OverflowText } from '@components/components/OverflowText/OverflowText';
import { Container, SubTitle, Title } from '@components/components/PageTitle/components';
import { PageTitleProps } from '@components/components/PageTitle/types';
import { Pill } from '@components/components/Pills';
import colors from '@src/alchemy-components/theme/foundations/colors';

const StyledSubTitle = styled(SubTitle)`
    margin-top: 4px;
    color: ${colors.gray[1900]};
`;

export const PageTitle = ({ title, subTitle, pillLabel, variant = 'pageHeader' }: PageTitleProps) => {
    return (
        <Container>
            <Title data-testid="page-title" variant={variant}>
                <OverflowText text={title} />
                {pillLabel ? <Pill label={pillLabel} size="sm" clickable={false} /> : null}
            </Title>

            {subTitle ? <StyledSubTitle variant={variant}>{subTitle}</StyledSubTitle> : null}
        </Container>
    );
};
