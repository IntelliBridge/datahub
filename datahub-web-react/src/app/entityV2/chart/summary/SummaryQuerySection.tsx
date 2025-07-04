import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components/macro';

import { StyledSyntaxHighlighter } from '@app/entityV2/shared/StyledSyntaxHighlighter';

import { REDESIGN_COLORS } from '@app/entityV2/shared/constants';

const PreviewSyntax = styled(StyledSyntaxHighlighter)`
    max-height: 68px;
    overflow: hidden;
    border-radius: 12px;
    max-width: 100%;
    background: #fafafc;

    span {
        font-family: 'Roboto Mono', monospace;
    }
`;

const ModalSyntaxContainer = styled.div`
    margin: 20px;
    overflow: auto;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-width: 400px;
`;

const StyledButton = styled(Button)`
    color: ${(props) => props.theme.styles['primary-color']};
    display: flex;
    width: fit-content;

    :hover {
        color: ${REDESIGN_COLORS.HOVER_PURPLE};
        background: transparent;
    }
`;

interface Props {
    query: string;
}

const SummaryQuerySection = ({ query }: Props) => {
    const [showFullContentModal, setShowFullContentModal] = useState(false);

    return (
        <Container>
            <Modal
                closeIcon={null}
                width="800px"
                footer={<Button onClick={() => setShowFullContentModal(false)}>Dismiss</Button>}
                open={showFullContentModal}
                onCancel={() => setShowFullContentModal(false)}
            >
                <ModalSyntaxContainer>
                    <StyledSyntaxHighlighter language="sql" wrapLongLines showLineNumbers>
                        {query}
                    </StyledSyntaxHighlighter>
                </ModalSyntaxContainer>
            </Modal>

            <PreviewSyntax language="sql" wrapLongLines>
                {query}
            </PreviewSyntax>
            <StyledButton type="text" onClick={() => setShowFullContentModal(true)}>
                Read More
            </StyledButton>
        </Container>
    );
};

export default SummaryQuerySection;
