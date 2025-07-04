import React from 'react';
import styled from 'styled-components';

import { StyledSyntaxHighlighter } from '@app/entityV2/shared/StyledSyntaxHighlighter';

import { ANTD_GRAY } from '@app/entity/shared/constants';

const Statement = styled.div<{ fullHeight?: boolean }>`
    background-color: ${ANTD_GRAY[2]};
    height: ${(props) => (props.fullHeight && '378px') || '240px'};
    margin: 0px 0px 4px 0px;
    border-radius: 8px;
    :hover {
        cursor: pointer;
    }
`;

const NestedSyntax = styled(StyledSyntaxHighlighter)`
    background-color: transparent;
    border: none;
    margin: 0px;
    height: 100%;
    overflow: auto;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export type Props = {
    query: string;
    showDetails: boolean;
    onClickExpand?: (newQuery) => void;
    index?: number;
};

export default function QueryCardQuery({ query, showDetails, onClickExpand, index }: Props) {
    return (
        <Statement fullHeight={!showDetails} onClick={onClickExpand} data-testid={`query-content-${index}`}>
            <NestedSyntax showLineNumbers language="sql">
                {query}
            </NestedSyntax>
        </Statement>
    );
}
