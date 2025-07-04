import { Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';

import { StyledSyntaxHighlighter } from '@app/entityV2/shared/StyledSyntaxHighlighter';

import { ANTD_GRAY } from '@app/entity/shared/constants';
import DynamicPropertiesTab from '@app/entity/shared/tabs/Entity/weaklyTypedAspects/DynamicPropertiesTab';
import DynamicTabularTab from '@app/entity/shared/tabs/Entity/weaklyTypedAspects/DynamicTabularTab';

import { AspectRenderSpec } from '@types';

type Props = {
    payload: string | undefined | null;
    type: string | undefined | null;
    renderSpec: AspectRenderSpec | undefined | null;
};

const QueryText = styled(Typography.Paragraph)`
    margin: 20px;
    &&& pre {
        background-color: ${ANTD_GRAY[2]};
        border: none;
    }
`;

const NestedSyntax = styled(StyledSyntaxHighlighter)`
    background-color: transparent;
    border: none;
`;

export default function DynamicTab({ renderSpec, payload, type }: Props) {
    if (type === 'tabular') {
        return <DynamicTabularTab payload={payload} tableKey={renderSpec?.key} />;
    }
    if (type === 'properties') {
        return <DynamicPropertiesTab payload={payload} />;
    }

    // Default fallback behavior
    return (
        <>
            <QueryText>
                <pre>
                    <NestedSyntax language="json">{JSON.stringify(JSON.parse(payload || '{}'), null, 2)}</NestedSyntax>
                </pre>
            </QueryText>
        </>
    );
}
