import { foundations } from './foundations';

const { colors } = foundations;

export const semanticTokens = {
    colors: {
        'body-text': colors.gray[0],
        'body-bg': colors.secondary[50],
        'border-color': colors.gray[500],
        'inverse-text': colors.gray[900],
        'subtle-bg': colors.secondary[70],
        'subtle-text': colors.gray[100],
        'placeholder-color': colors.gray[500],
        primary: colors.primary[30],
        secondary: colors.secondary[45],
        error: colors.status.error,
        success: colors.status.complete,
        warning: colors.status.retrying,
        info: colors.status.processing,
        paused: colors.status.paused,
        stopped: colors.status.stopped,
        queued: colors.status.queued,
        cancelled: colors.status.cancelled,
        approvalRequired: colors.status.approvalRequired,
        idle: colors.status.idle,
    },
};
