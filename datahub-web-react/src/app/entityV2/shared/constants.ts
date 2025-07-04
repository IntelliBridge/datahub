import { EntityType } from '@types';

// TODO(Gabe): integrate this w/ the theme
export const REDESIGN_COLORS = {
    BACKGROUND: '#141B22',
    GREY: '#979CA4',
    BLUE: '#FFD600',
    DARK_GREY: '#25323F',
    HEADING_COLOR: '#FFD600',
    LIGHT_GREY: '#25323F',
    BACKGROUND_GREY: '#25323F',
    PRIMARY_DARK_GREEN: '#B18F00',
    TERTIARY_GREEN: '#FAF1BA',
    WHITE_WIRE: '#979CA4',
    WHITE: '#FFFFFF',
    BLACK: '#141B22',
    SIDE_BAR: '#25323F',
    PRIMARY_PURPLE: '#FFD600',
    BACKGROUND_GRAY: '#B18F00',
    TEXT_HEADING: '#FFFFFF',
    TITLE_PURPLE: '#FFD600',
    TITLE_PURPLE_2: '#B18F00',
    HOVER_PURPLE: '#FAF1BA',
    HOVER_PURPLE_2: '#FFD600',
    PLACEHOLDER_PURPLE: '#A4A4AA',
    HIGHLIGHT_YELLOW: '#FAF1BA',
    LINK_HOVER_BLUE: '#FFD600',
    RED_ERROR_BORDER: '#A4A4AA',
    BACKGROUND_SECONDARY_GRAY: '#25323F',
    BACKGROUND_GRAY_2: '#141B22',
    BACKGROUND_GRAY_3: '#25323F',
    BACKGROUND_GRAY_4: '#141B22',
    BACKGROUND_OVERLAY_BLACK: '#141B22',
    BACKGROUND_OVERLAY_BLACK_SEARCH: '#25323F',
    BACKGROUND_PRIMARY_1: '#FFD600',
    BACKGROUND_PRIMARY_2: '#B18F00',
    VIEW_PURPLE: '#FAF1BA',
    BOX_SHADOW: '#141B22',
    BORDER_1: '#979CA4',
    BORDER_2: '#979CA4',
    BORDER_3: '#979CA4',
    BORDER_4: '#FFD600',
    BORDER_5: '#B18F00',
    SECONDARY_LIGHT_GREY: '#A4A4AA',
    ACTION_ICON_GREY: '#979CA4',
    AVATAR_STYLE_WHITE_BACKGROUND: '#FFFFFF66',
    GROUP_AVATAR_STYLE_GRADIENT: 'linear-gradient(0deg, #B18F00 0%, #FFD600 100%), #B18F00',
    PROFILE_AVATAR_STYLE_GRADIENT: 'linear-gradient(93deg, #B18F00 5.11%, #FFD600 112.87%), #B18F00',
    SIDE_BAR_BORDER_RIGHT: '#979CA4',
    DARK_PURPLE: '#25323F',
    LINK_GREY: '#FAF1BA',
    TEXT_GREY: '#A4A4AA',
    WARNING_RED: '#A4A4AA',
    SUBTITLE: '#FAF1BA',
    LIGHT_GREY_BORDER: '#979CA4',
    BACKGROUND_PURPLE_2: '#25323F',
    FOUNDATION_BLUE_2: '#979CA4',
    FOUNDATION_BLUE_4: '#A4A4AA',
    FOUNDATION_BLUE_5: '#979CA4',
    SUB_TEXT: '#A4A4AA',
    COLD_GREY_TEXT: '#979CA4',
    COLD_GREY_TEXT_BLUE_1: '#25323F',
    LIGHT_GREY_PILL: '#25323F',
    RED_LIGHT: '#A4A4AA',
    RED_NORMAL: '#A4A4AA',
    RED_ERROR: '#A4A4AA',
    RED_800: '#979CA4',
    BODY_TEXT: '#FFFFFF',
    GREEN_LIGHT: '#FAF1BA',
    GREEN_NORMAL: '#FFD600',
    GREEN_800: '#B18F00',
    TEXT_HEADING_SUB_LINK: '#FAF1BA',
    DARK_DIVIDER: '#979CA4',
    DEPRECATION_RED: '#A4A4AA',
    DEPRECATION_RED_LIGHT: '#A4A4AA',
    BODY_TEXT_GREY: '#FFFFFF',
    SECTION_BACKGROUND: '#25323F',
    LIGHT_TEXT_DARK_BACKGROUND: '#FAF1BA',
    GREY_500: '#979CA4',
    GREY_300: '#A4A4AA',
    YELLOW_500: '#FFD600',
    YELLOW_200: '#FAF1BA',
    YELLOW_600: '#FFD600',
    YELLOW_700: '#B18F00',
    WARNING_YELLOW: '#B18F00',
    YELLOW_BACKGROUND: '#FAF1BA',
    TOOLTIP_BACKGROUND: '#141B22',
    ICON_ON_DARK: '#FFFFFF',
    SILVER_GREY: '#979CA4',
    GREY_100: '#A4A4AA',
    PURPLE_LIGHT: '#FAF1BA',
};

export const SEARCH_COLORS = {
    TITLE_PURPLE: '#FFD600',
    SUBTEXT_PURPPLE: '#FAF1BA',
    BACKGROUND_GREY: '#3E4550',
    PLATFORM_TEXT: '#979CA4',
    MATCH_BACKGROUND_GREY: '#141B22',
    MATCH_TEXT_GREY: '#A4A4AA',
    LINK_BLUE: '#FFD600',
};

export const ANTD_GRAY = {
    1: '#FFFFFF',
    2: '#FAFAFA',
    2.5: '#F8F8F8',
    3: '#F5F5F5',
    4: '#F0F0F0',
    4.5: '#E9E9E9',
    5: '#D9D9D9',
    5.5: '#CCCCCC',
    6: '#BFBFBF',
    7: '#8C8C8C',
    8: '#595959',
    9: '#434343',
    10: '#272727',
    11: '#262626',
};

export const ANTD_GRAY_V2 = {
    1: '#F8F9Fa',
    2: '#F3F5F6',
    5: '#DDE0E4',
    6: '#B2B8BD',
    8: '#5E666E',
    10: '#1B1E22',
    11: '#6C6B88',
    12: '#52596c',
    13: '#ababab',
    14: '#f7f7f7',
};

export const LINEAGE_COLORS = {
    BLUE_1: '#0958D9',
    BLUE_2: '#1890FF',
    PURPLE_1: '#5280E2',
    PURPLE_2: '#324473',
    PURPLE_3: SEARCH_COLORS.TITLE_PURPLE,
    NODE_BORDER: ANTD_GRAY[6],
};

export const EMPTY_MESSAGES = {
    documentation: {
        title: 'No documentation yet',
    },
    tags: {
        title: 'No tags yet',
        description: 'Tag entities to help make them more discoverable and call out their most important attributes.',
    },
    terms: {
        title: 'No terms yet',
        description: 'Apply glossary terms to entities to classify their data.',
    },
    owners: {
        title: 'No owners yet',
        description: 'Adding owners helps you keep track of who is responsible for this data.',
    },
    properties: {
        title: 'No properties',
        description: 'Properties will appear here if they exist in your data source.',
    },
    queries: {
        title: 'No queries yet',
        description: 'Create, view, and share commonly used queries for this dataset.',
    },
    domain: {
        title: 'No domain yet',
        description: 'Group related entities based on your organizational structure using by adding them to a Domain.',
    },
    dataProduct: {
        title: 'No product yet',
        description: 'Group related entities based on shared characteristics by adding them to a Data Product.',
    },
    application: {
        title: 'No application yet',
        description: 'Associate entities with applications to track ownership and lifecycle.',
    },
    contains: {
        title: 'Does not Contain any Glossary Terms',
        description: 'Terms can contain other terms to represent a "Has A" style relationship.',
    },
    inherits: {
        title: 'Does not Inherit any Glossary Terms',
        description: 'Terms can inherit from other terms to represent an "Is A" style relationship.',
    },
    'contained by': {
        title: 'Is not Contained by any Glossary Terms',
        description: 'Terms can be contained by other terms to represent a "Has A" style relationship.',
    },
    'inherited by': {
        title: 'Is not Inherited by any Glossary Terms',
        description: 'Terms can be inherited by other terms to represent an "Is A" style relationship.',
    },
    structuredProps: {
        title: 'No value set',
    },
};

export const ELASTIC_MAX_COUNT = 10000;

export const getElasticCappedTotalValueText = (count: number) => {
    if (count === ELASTIC_MAX_COUNT) {
        return `${ELASTIC_MAX_COUNT}+`;
    }

    return `${count}`;
};

export const ENTITY_TYPES_WITH_MANUAL_LINEAGE = new Set([
    EntityType.Dashboard,
    EntityType.Chart,
    EntityType.Dataset,
    EntityType.DataJob,
]);

export const GLOSSARY_ENTITY_TYPES = [EntityType.GlossaryTerm, EntityType.GlossaryNode];

export const DEFAULT_SYSTEM_ACTOR_URNS = ['urn:li:corpuser:__datahub_system', 'urn:li:corpuser:unknown'];

export const VIEW_ENTITY_PAGE = 'VIEW_ENTITY_PAGE';

// only values for Domain Entity for custom configurable default tab
export enum EntityProfileTab {
    DOMAIN_ENTITIES_TAB = 'DOMAIN_ENTITIES_TAB',
    DOCUMENTATION_TAB = 'DOCUMENTATION_TAB',
    DATA_PRODUCTS_TAB = 'DATA_PRODUCTS_TAB',
    SUMMARY_TAB = 'SUMMARY_TAB',
}

export const EDITING_DOCUMENTATION_URL_PARAM = 'editing';

export const UNKNOWN_DATA_PLATFORM = 'urn:li:dataPlatform:unknown';

export const SMART_ASSERTION_STALE_IN_DAYS = 3;

export const TITLE_CASE_EXCEPTION_WORDS = ['of', 'the', 'in', 'on', 'and', 'a', 'an', 'to', 'for', 'at', 'by'];

export const RECOMMENDATION_MODULE_ID_RECENTLY_VIEWED_ENTITIES = 'RecentlyViewedEntities';
export const RECOMMENDATION_MODULE_ID_RECENTLY_EDITED_ENTITIES = 'RecentlyEditedEntities';
export const RECOMMENDATION_MODULE_ID_RECENT_SEARCHES = 'RecentSearches';
