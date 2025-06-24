import styled from 'styled-components';

import { getHeaderSubtitleStyles, getHeaderTitleStyles } from '@components/components/PageTitle/utils';
import { colors, typography } from '@components/theme';

// Text Styles
const titleStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    fontWeight: typography.fontWeights.bold,
    color: colors.gray[100],
};

const subTitleStyles = {
    fontWeight: typography.fontWeights.normal,
    color: colors.gray[300],
};

// Default styles
const baseStyles = {
    fontFamily: typography.fonts.body,
    margin: 0,
    maxWidth: '100%',

    '& a': {
        color: colors.yellow[600],
        textDecoration: 'none',
        transition: 'color 0.15s ease',

        '&:hover': {
            color: colors.yellow[600],
        },
    },
};

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
`;

export const Title = styled.div<{ variant: string }>(({ variant }) => ({
    ...baseStyles,
    ...titleStyles,
    ...getHeaderTitleStyles(variant),
}));

export const SubTitle = styled.div<{ variant: string }>(({ variant }) => ({
    ...baseStyles,
    ...subTitleStyles,
    ...getHeaderSubtitleStyles(variant),
}));
