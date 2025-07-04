import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import styled from 'styled-components';

import { EntityAndType } from '@app/entity/shared/types';
import { SearchSelect } from '@app/entityV2/shared/components/styled/search/SearchSelect';
import ClickOutside from '@app/shared/ClickOutside';
import { Button } from '@src/alchemy-components';
import { ModalButtonContainer } from '@src/app/shared/button/styledComponents';

import { EntityType } from '@types';

const StyledModal = styled(Modal)`
    top: 30px;
`;

const MODAL_WIDTH_PX = 800;

const UI_Z_INDEX = 1000;

const MODAL_BODY_STYLE = { padding: 0, height: '70vh' };

type SearchSelectModalProps = {
    fixedEntityTypes?: Array<EntityType> | null;
    placeholderText?: string | null;
    titleText?: string | null;
    continueText?: string | null;
    onContinue: (entityUrns: string[]) => void;
    onCancel?: () => void;
    limit?: number;
};

/**
 * Modal that can be used for searching & selecting a subset of the entities in the Metadata Graph in order to take a specific action.
 *
 * This component provides easy ways to filter for a specific set of entity types, and provides a set of entity urns
 * when the selection is complete.
 */
export const SearchSelectModal = ({
    fixedEntityTypes,
    placeholderText,
    titleText,
    continueText,
    onContinue,
    onCancel,
    limit,
}: SearchSelectModalProps) => {
    const [selectedEntities, setSelectedEntities] = useState<EntityAndType[]>([]);
    const [showExitConfirm, setShowExitConfirm] = useState(false);

    const onCancelSelect = () => {
        if (selectedEntities.length > 0) {
            setShowExitConfirm(true);
        } else {
            onCancel?.();
        }
    };

    const handleExitConfirm = () => {
        setShowExitConfirm(false);
        onCancel?.();
    };

    const handleExitCancel = () => {
        setShowExitConfirm(false);
    };

    return (
        <>
            <ClickOutside onClickOutside={onCancelSelect} wrapperClassName="search-select-modal">
                <StyledModal
                    wrapClassName="search-select-modal"
                    bodyStyle={MODAL_BODY_STYLE}
                    title={titleText || 'Select entities'}
                    width={MODAL_WIDTH_PX}
                    zIndex={UI_Z_INDEX}
                    visible
                    onCancel={onCancelSelect}
                    footer={
                        <ModalButtonContainer>
                            <Button onClick={onCancel} variant="text" color="gray">
                                Cancel
                            </Button>
                            <Button
                                id="continueButton"
                                onClick={() => onContinue(selectedEntities.map((entity) => entity.urn))}
                                disabled={selectedEntities.length === 0}
                            >
                                {continueText || 'Done'}
                            </Button>
                        </ModalButtonContainer>
                    }
                >
                    <SearchSelect
                        fixedEntityTypes={fixedEntityTypes}
                        placeholderText={placeholderText}
                        selectedEntities={selectedEntities}
                        setSelectedEntities={setSelectedEntities}
                        limit={limit}
                    />
                </StyledModal>
            </ClickOutside>
            <Modal
                title={
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <ExclamationCircleOutlined style={{ color: '#faad14' }} />
                        Exit Selection
                    </div>
                }
                open={showExitConfirm}
                onCancel={handleExitCancel}
                footer={
                    <ModalButtonContainer>
                        <Button onClick={handleExitCancel} variant="text" color="gray">
                            Cancel
                        </Button>
                        <Button onClick={handleExitConfirm} color="yellow">
                            Yes
                        </Button>
                    </ModalButtonContainer>
                }
            >
                <div style={{ fontSize: '16px', lineHeight: '1.5' }}>
                    Are you sure you want to exit? {selectedEntities.length} selection(s) will be cleared.
                </div>
            </Modal>
        </>
    );
};
