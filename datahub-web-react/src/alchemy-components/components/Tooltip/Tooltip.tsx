import { Tooltip, TooltipProps } from 'antd';
import * as React from 'react';

export default function DataHubTooltip(props: TooltipProps & React.RefAttributes<unknown>) {
    return <Tooltip showArrow={false} color="#141B22" overlayInnerStyle={{ color: "#FFFFFF" }} {...props} />;
}
