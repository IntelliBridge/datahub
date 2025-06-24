import { Form, Modal, Typography } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';

import { ANTD_GRAY } from '@app/entityV2/shared/constants';
import { Editor } from '@app/entityV2/shared/tabs/Documentation/components/editor/Editor';
import { Button } from '@src/alchemy-components/components/Button/Button';

const FormLabel = styled(Typography.Text)`
    font-size: 10px;
    font-weight: bold;
`;

const StyledEditor = styled(Editor)`
    border: 1px solid ${ANTD_GRAY[4.5]};
`;

const StyledViewer = styled(Editor)`
    .remirror-editor.ProseMirror {
        padding: 0;
    }
`;

const OriginalDocumentation = styled(Form.Item)`
    margin-bottom: 12px;
`;

type Props = {
    title: string;
    description?: string;
    original?: string;
    propagatedDescription?: string;
    onClose: () => void;
    onSubmit: (description: string) => void;
    isAddDesc?: boolean;
};

export default function UpdateDescriptionModal({
    title,
    description,
    original,
    propagatedDescription,
    onClose,
    onSubmit,
    isAddDesc,
}: Props) {
    const [updatedDesc, setDesc] = useState(description || original || '');

    return (
        <Modal
            title={title}
            open
            width={900}
            onCancel={onClose}
            okText={isAddDesc ? 'Submit' : 'Update'}
            footer={
                <div style={{ display: "flex", gap: "8px", justifyContent: "end" }}>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button
                        variant="filled"
                        color="yellow"
                        onClick={() => onSubmit(updatedDesc)}
                        isDisabled={updatedDesc === description}
                        data-testid="description-modal-update-button"
                    >
                        Publish
                    </Button>
                </div>
            }
        >
            <Form layout="vertical">
                {!isAddDesc && description && original && (
                    <OriginalDocumentation label={<FormLabel>Original:</FormLabel>}>
                        <StyledViewer content={original || ''} readOnly />
                    </OriginalDocumentation>
                )}
                {!isAddDesc && description && propagatedDescription && (
                    <OriginalDocumentation label={<FormLabel>Propagated:</FormLabel>}>
                        <StyledViewer content={propagatedDescription || ''} readOnly />
                    </OriginalDocumentation>
                )}
                <Form.Item>
                    <StyledEditor content={updatedDesc} onChange={setDesc} />
                </Form.Item>
            </Form>
        </Modal>
    );
}
