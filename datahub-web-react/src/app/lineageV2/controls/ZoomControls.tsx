import { ZoomInOutlined, ZoomOutOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { Panel, useReactFlow } from 'reactflow';
import styled from 'styled-components';
import colors from '@src/alchemy-components/theme/foundations/colors';

import { REDESIGN_COLORS } from '@app/entityV2/shared/constants';
import { TRANSITION_DURATION_MS } from '@app/lineageV2/common';

const StyledZoomButton = styled(Button)`
    border-radius: 8px;
    border: 1px solid ${colors.secondary[50]};
    box-shadow: 0 4px 4px 0 ${REDESIGN_COLORS.BOX_SHADOW};
    height: 40px;
    width: 40px;
    margin-bottom: 8px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    background: ${colors.secondary[90]};
    color: #FFFFFF;
    
    &:focus {
        color: #FFFFFF !important;
        border-color: ${colors.secondary[50]} !important;
        background: ${colors.secondary[70]} !important;
    }
    
    &:hover {
        background: ${colors.secondary[70]} !important;
        border: 1px solid ${colors.secondary[50]} !important;
        color: #FFFFFF !important;
    }
`;

const ZoomControls: React.FC = () => {
    const { zoomIn, zoomOut } = useReactFlow();

    return (
        <Panel position="bottom-left">
            <StyledZoomButton tabIndex={-1} onClick={() => zoomIn({ duration: TRANSITION_DURATION_MS })}>
                <ZoomInOutlined />
            </StyledZoomButton>
            <StyledZoomButton tabIndex={-1} onClick={() => zoomOut({ duration: TRANSITION_DURATION_MS })}>
                <ZoomOutOutlined />
            </StyledZoomButton>
        </Panel>
    );
};

export default ZoomControls;

