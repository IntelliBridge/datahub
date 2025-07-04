import styled from 'styled-components';
import { colors, radius, spacing, typography } from '@src/alchemy-components/theme';
import { IconAlignmentOptions } from '@src/alchemy-components/theme/config';

export const CardContainer = styled.div<{ hasButton?: boolean; width?: string; maxWidth?: string; height?: string }>(
    ({ hasButton, width, maxWidth, height, theme }) => ({
        border: `1px solid ${theme.styles['border-color-base']}`,
        borderRadius: radius.lg,
        padding: spacing.md,
        display: 'flex',
        flex: `1 1 ${maxWidth}`,
        minWidth: '150px',
        boxShadow: '0px 1px 2px 0px rgba(33, 23, 95, 0.12)',
        backgroundColor: theme.styles['component-background'],
        flexDirection: 'column',
        gap: spacing.md,
        maxWidth,
        width,
        height,

        '&:hover': hasButton
            ? {
                border: `1px solid ${colors.primary[30]}`,
                cursor: 'pointer',
            }
            : {},
    }),
);

export const Header = styled.div<{ iconAlignment?: IconAlignmentOptions }>(({ iconAlignment }) => ({
    display: 'flex',
    flexDirection: iconAlignment === 'horizontal' ? 'row' : 'column',
    alignItems: iconAlignment === 'horizontal' ? 'center' : 'start',
    gap: spacing.sm,
    width: '100%',
}));

export const TitleContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
    width: '100%',
});

export const Title = styled.div<{ $isEmpty?: boolean }>(({ $isEmpty, theme }) => ({
    fontSize: typography.fontSizes.lg,
    fontWeight: typography.fontWeights.bold,
    color: $isEmpty ? colors.gray[0] : theme.styles['text-color'],
    display: 'flex',
    alignItems: 'center',
    gap: spacing.xsm,
}));

export const SubTitleContainer = styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
});

export const SubTitle = styled.div(({ theme }) => ({
    fontSize: typography.fontSizes.md,
    fontWeight: typography.fontWeights.normal,
    color: theme.styles['text-color-secondary'],
}));
