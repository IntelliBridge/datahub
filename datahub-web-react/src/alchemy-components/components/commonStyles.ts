import { colors, typography } from '@components/theme';

export const INPUT_MAX_HEIGHT = '40px';

export const formLabelTextStyles = {
    fontWeight: typography.fontWeights.normal,
    fontSize: typography.fontSizes.md,
    color: colors.white,
};

export const inputValueTextStyles = (size = 'md') => ({
    fontFamily: typography.fonts.body,
    fontWeight: typography.fontWeights.normal,
    fontSize: typography.fontSizes[size],
    color: colors.gray[700],
    backgroundColor: colors.secondary[50],
});

export const inputPlaceholderTextStyles = {
    fontFamily: typography.fonts.body,
    fontWeight: typography.fontWeights.normal,
    fontSize: typography.fontSizes.md,
    color: colors.gray[1900],
};
