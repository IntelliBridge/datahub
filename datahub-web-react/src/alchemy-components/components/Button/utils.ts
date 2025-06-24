/*
 * Button Style Utilities
 */
import { CSSObject } from 'styled-components';

import { ButtonStyleProps, ButtonVariant } from '@components/components/Button/types';
import { colors, radius, shadows, spacing, typography } from '@components/theme';
import { ColorOptions, SizeOptions } from '@components/theme/config';
import { getColor, getFontSize } from '@components/theme/utils';

import { Theme } from '@conf/theme/types';

interface ColorStyles {
    bgColor: string;
    hoverBgColor: string;
    activeBgColor: string;
    disabledBgColor: string;
    borderColor: string;
    activeBorderColor: string;
    disabledBorderColor: string;
    textColor: string;
    disabledTextColor: string;
}

// Utility function to get color styles for button - does not generate CSS
const getButtonColorStyles = (variant: ButtonVariant, color: ColorOptions, theme?: Theme): ColorStyles => {
    // Dark theme color choices
    const darkBg = colors.gray[2000];
    const darkBgHover = colors.gray[2100];
    const darkBorder = colors.gray[1400];
    const darkText = colors.gray[0];
    const darkTextSecondary = colors.gray[1800];
    const darkDisabledBg = colors.gray[2100];
    const darkDisabledText = colors.gray[1800];

    const color500 = getColor(color, 500, theme);
    const isViolet = color === 'violet';

    const base = {
        // Backgrounds
        bgColor: darkBg,
        hoverBgColor: darkBgHover,
        activeBgColor: getColor(color, 700, theme),
        disabledBgColor: darkDisabledBg,

        // Borders
        borderColor: darkBorder,
        activeBorderColor: getColor(color, 300, theme),
        disabledBorderColor: darkBorder,

        // Text
        textColor: darkText,
        disabledTextColor: darkDisabledText,
    };

    // Specific color override for white
    if (color === 'white') {
        base.textColor = colors.gray[600];
        base.disabledTextColor = darkDisabledText;
    }

    // Specific color override for gray
    if (color === 'gray') {
        base.textColor = darkTextSecondary;
        base.bgColor = darkBg;
        base.borderColor = darkBorder;
        base.hoverBgColor = darkBgHover;
        base.activeBgColor = colors.gray[1700];
    }

    if (color === 'yellow') {
        base.textColor = colors.black;
        base.bgColor = colors.primary[30];
        base.borderColor = colors.primary[30];
        base.hoverBgColor = colors.primary[30];
        base.activeBgColor = colors.primary[30];
    }

    // Override styles for outline variant
    if (variant === 'outline') {
        return {
            ...base,
            bgColor: 'transparent',
            borderColor: darkBorder,
            textColor: darkText,
            hoverBgColor: colors.gray[2100],
            activeBgColor: colors.gray[1700],
            disabledBgColor: 'transparent',
        };
    }

    // Override styles for text variant
    if (variant === 'text') {
        return {
            ...base,
            textColor: darkText,
            bgColor: 'transparent',
            borderColor: 'transparent',
            hoverBgColor: colors.gray[2100],
            activeBgColor: 'transparent',
            disabledBgColor: 'transparent',
            disabledBorderColor: 'transparent',
        };
    }

    // Override styles for secondary variant
    if (variant === 'secondary') {
        return {
            ...base,
            bgColor: colors.gray[2100],
            hoverBgColor: colors.gray[2000],
            activeBgColor: colors.gray[1700],
            textColor: darkText,
            borderColor: 'transparent',
            disabledBgColor: 'transparent',
            disabledBorderColor: 'transparent',
        };
    }

    // Filled variable is the base style
    return base;
};

// Generate color styles for button
const getButtonVariantStyles = (variant: ButtonVariant, colorStyles: ColorStyles, color: ColorOptions): CSSObject => {
    const isViolet = color === 'violet';
    const violetGradient = `radial-gradient(115.48% 144.44% at 50% -44.44%, var(--buttons-bg-2-for-gradient, #705EE4) 38.97%, var(--buttons-bg, #533FD1) 100%)`;

    const variantStyles = {
        filled: {
            background: isViolet ? violetGradient : colorStyles.bgColor,
            border: `1px solid ${colorStyles.borderColor}`,
            color: colorStyles.textColor,
            '&:hover': {
                background: isViolet ? violetGradient : colorStyles.hoverBgColor,
                border: `1px solid ${colorStyles.hoverBgColor}`,
                boxShadow: shadows.sm,
            },
            '&:disabled': {
                backgroundColor: colorStyles.disabledBgColor,
                background: 'none',
                border: `1px solid ${colorStyles.disabledBorderColor}`,
                color: colorStyles.disabledTextColor,
                boxShadow: shadows.xs,
            },
        },
        outline: {
            backgroundColor: 'transparent',
            border: `1px solid ${colorStyles.borderColor}`,
            color: colorStyles.textColor,
            '&:hover': {
                backgroundColor: colorStyles.hoverBgColor,
                boxShadow: 'none',
            },
            '&:disabled': {
                backgroundColor: colorStyles.disabledBgColor,
                border: `1px solid ${colorStyles.disabledBorderColor}`,
                color: colorStyles.disabledTextColor,
                boxShadow: shadows.xs,
            },
        },
        text: {
            backgroundColor: 'transparent',
            border: 'none',
            color: colorStyles.textColor,
            '&:hover': {
                backgroundColor: colorStyles.hoverBgColor,
            },
            '&:disabled': {
                backgroundColor: colorStyles.disabledBgColor,
                color: colorStyles.disabledTextColor,
            },
        },
        secondary: {
            backgroundColor: colorStyles.bgColor,
            border: 'none',
            color: colorStyles.textColor,
            '&:hover': {
                backgroundColor: colorStyles.hoverBgColor,
                boxShadow: 'none',
            },
            '&:disabled': {
                backgroundColor: colorStyles.disabledBgColor,
                color: colorStyles.disabledTextColor,
            },
        },
    };

    return variantStyles[variant];
};

// Generate font styles for button
const getButtonFontStyles = (size: SizeOptions) => {
    const baseFontStyles = {
        fontFamily: typography.fonts.body,
        fontWeight: typography.fontWeights.semiBold,
        lineHeight: typography.lineHeights.none,
    };

    return { ...baseFontStyles, fontSize: getFontSize(size) };
};

// Generate radii styles for button
const getButtonRadiiStyles = (isCircle: boolean) => {
    if (isCircle) return { borderRadius: radius.full };
    return { borderRadius: radius.sm }; // radius is the same for all button sizes
};

// Generate padding styles for button
const getButtonPadding = (size: SizeOptions, hasChildren: boolean, isCircle: boolean) => {
    if (isCircle) return { padding: spacing.xsm };
    if (!hasChildren) return { padding: spacing.xsm };

    const paddingStyles = {
        xs: {
            vertical: 6,
            horizontal: 6,
        },
        sm: {
            vertical: 8,
            horizontal: 12,
        },
        md: {
            vertical: 10,
            horizontal: 12,
        },
        lg: {
            vertical: 10,
            horizontal: 16,
        },
        xl: {
            vertical: 12,
            horizontal: 20,
        },
    };

    const selectedStyle = paddingStyles[size];
    const verticalPadding = selectedStyle.vertical;
    const horizontalPadding = selectedStyle.horizontal;
    return { padding: `${verticalPadding}px ${horizontalPadding}px` };
};

// Generate active styles for button
const getButtonActiveStyles = (colorStyles: ColorStyles) => ({
    borderColor: 'transparent',
    backgroundColor: colorStyles.activeBgColor, // TODO: Figure out how to make the #fff interior border transparent
    boxShadow: `0 0 0 2px #fff, 0 0 0 4px ${colorStyles.activeBgColor}`,
});

// Generate loading styles for button
const getButtonLoadingStyles = (): CSSObject => ({
    pointerEvents: 'none',
    opacity: 0.75,
});

/*
 * Main function to generate styles for button
 */
export const getButtonStyle = (props: ButtonStyleProps): CSSObject => {
    const { variant, color, size, isCircle, isActive, isLoading, isDisabled, hasChildren, theme } = props;

    // Get map of colors
    const colorStyles = getButtonColorStyles(variant, color, theme);

    // Define styles for button
    const variantStyles = getButtonVariantStyles(variant, colorStyles, color);
    const fontStyles = getButtonFontStyles(size);
    const radiiStyles = getButtonRadiiStyles(isCircle);
    const paddingStyles = getButtonPadding(size, hasChildren, isCircle);

    // Base of all generated styles
    let styles: CSSObject = {
        ...variantStyles,
        ...fontStyles,
        ...radiiStyles,
        ...paddingStyles,
    };

    // Focus & Active styles are the same, but active styles are applied conditionally & override prevs styles
    const activeStyles = { ...getButtonActiveStyles(colorStyles) };
    if (!isDisabled && isActive) {
        styles['&:focus'] = activeStyles;
        styles['&:active'] = activeStyles;
        styles = { ...styles, ...activeStyles };
    }

    // Loading styles
    if (isLoading) styles = { ...styles, ...getButtonLoadingStyles() };

    // Return generated styles
    return styles;
};
