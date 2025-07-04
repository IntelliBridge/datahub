import { Popover } from '@components';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import EntityRegistry from '@app/entityV2/EntityRegistry';
import { SEARCH_COLORS } from '@app/entityV2/shared/constants';
import { isNullOrUndefined } from '@app/previewV2/utils';
import { pluralize } from '@app/shared/textUtil';
import { useEmbeddedProfileLinkProps } from '@app/shared/useEmbeddedProfileLinkProps';
import colors from '@src/alchemy-components/theme/foundations/colors';

import { EntityType } from '@types';

import LineageStatusIcon from '@images/lineage-status.svg?react';

const Icon = styled(LineageStatusIcon) <{ highlighted?: boolean }>`
    display: flex;
    color: ${({ highlighted }) => (highlighted ? colors.primary[30] : colors.gray[500])};
    font-size: 16px;

    :hover {
        ${({ highlighted }) => highlighted && `color: ${SEARCH_COLORS.LINK_BLUE};`}
`;

const PopoverContent = styled.div`
    align-items: center;
    display: flex;
    color: ${colors.white};
`;

interface Props {
    upstreamTotal: number | null | undefined;
    downstreamTotal: number | null | undefined;
    entityRegistry: EntityRegistry;
    entityType: EntityType;
    urn: string;
}

export default function LineageBadge({ upstreamTotal, downstreamTotal, entityRegistry, entityType, urn }: Props) {
    const hasLineage = !!upstreamTotal || !!downstreamTotal;
    const linkProps = useEmbeddedProfileLinkProps();

    const upstreamContent = upstreamTotal ? `${upstreamTotal} ${pluralize(upstreamTotal, 'upstream')}` : '';
    const downstreamContent = downstreamTotal ? `${downstreamTotal} ${pluralize(downstreamTotal, 'downstream')}` : '';
    const separator = upstreamContent && downstreamContent ? ', ' : '';

    if (isNullOrUndefined(upstreamTotal) && isNullOrUndefined(downstreamTotal)) {
        return null;
    }

    return (
        <Popover
            content={
                hasLineage && (
                    <PopoverContent>
                        {upstreamContent}
                        {separator}
                        {downstreamContent}
                    </PopoverContent>
                )
            }
            showArrow={false}
            placement="bottom"
        >
            {hasLineage && (
                <Link to={`${entityRegistry.getEntityUrl(entityType, urn)}/Lineage`} {...linkProps}>
                    <Icon highlighted />
                </Link>
            )}
            {!hasLineage && <Icon highlighted={false} />}
        </Popover>
    );
}
