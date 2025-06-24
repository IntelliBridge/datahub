import { Empty, Typography } from 'antd';
import React from 'react';
import styled from 'styled-components/macro';

import { ANTD_GRAY } from '@app/entity/shared/constants';
import { Button } from '@src/alchemy-components/components/Button/Button';

const EmptyDomainContainer = styled.div`
    display: flex;
    justify-content: center;
    overflow-y: auto;
`;

const StyledEmpty = styled(Empty)`
    width: 35vw;
    @media screen and (max-width: 1300px) {
        width: 50vw;
    }
    @media screen and (max-width: 896px) {
        overflow-y: auto;
        max-height: 75vh;
        &::-webkit-scrollbar {
            width: 5px;
            background: #d6d6d6;
        }
    }
    padding: 20px;
    .ant-empty-image {
        display: none;
    }
`;

const StyledButton = styled(Button)`
    margin: 18px auto 0 auto;
`;

const IconContainer = styled.span`
    color: ${ANTD_GRAY[7]};
    font-size: 40px;
`;

interface Props {
    title?: string;
    setIsCreatingDomain: React.Dispatch<React.SetStateAction<boolean>>;
    description?: React.ReactNode;
    icon?: React.ReactNode;
}

function EmptyDomainsSection(props: Props) {
    const { title, description, setIsCreatingDomain, icon } = props;
    return (
        <EmptyDomainContainer>
            <StyledEmpty
                description={
                    <>
                        <IconContainer>{icon}</IconContainer>
                        <Typography.Title level={4}>{title}</Typography.Title>
                        {description}
                    </>
                }
            >
                <StyledButton
                    variant="filled"
                    color="yellow"
                    onClick={() => setIsCreatingDomain(true)}
                    icon={{ icon: 'Add' }}
                >
                    Create Domain
                </StyledButton>
            </StyledEmpty>
        </EmptyDomainContainer>
    );
}

export default EmptyDomainsSection;
