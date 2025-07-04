import { Checkbox, Modal, Typography } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import styled from 'styled-components';

import { EntityAndType } from '@app/entity/shared/types';
import { SearchSelectActions } from '@app/entityV2/shared/components/styled/search/SearchSelectActions';
import { useEntityFormContext } from '@src/app/entity/shared/entityForm/EntityFormContext';
import { Button } from '@src/alchemy-components';
import { ModalButtonContainer } from '@src/app/shared/button/styledComponents';

const CheckboxContainer = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
`;

const ActionsContainer = styled.div`
    display: flex;
    align-items: center;
`;

const CancelButton = styled(Button)`
    && {
        margin-left: 8px;
        padding: 0px;
    }
`;

const StyledCheckbox = styled(Checkbox)`
    margin-right: 12px;
    padding-bottom: 0px;
`;

const StyledButton = styled(Button)`
    margin-left: 8px;
    color: ${(props) => props.theme.styles['primary-color']};
`;

type Props = {
    isSelectAll: boolean;
    totalResults?: number;
    selectedEntities?: EntityAndType[];
    setSelectedEntities: (entities: EntityAndType[]) => void;
    limit?: number;
    showCancel?: boolean;
    showActions?: boolean;
    onChangeSelectAll: (selected: boolean) => void;
    onCancel?: () => void;
    refetch?: () => void;
    areAllEntitiesSelected?: boolean;
    setAreAllEntitiesSelected?: (areAllSelected: boolean) => void;
};

/**
 * A header for use when an entity search select experience is active.
 *
 * This component provides a select all checkbox and a set of actions that can be taken on the selected entities.
 */
export const SearchSelectBar = ({
    isSelectAll,
    totalResults = 0,
    selectedEntities = [],
    setSelectedEntities,
    limit,
    showCancel = true,
    showActions = true,
    onChangeSelectAll,
    onCancel,
    refetch,
    areAllEntitiesSelected,
    setAreAllEntitiesSelected,
}: Props) => {
    const { isInFormContext } = useEntityFormContext();
    const [showExitConfirm, setShowExitConfirm] = useState(false);
    const selectedEntityCount = selectedEntities.length;
    
    const onClickCancel = () => {
        if (selectedEntityCount > 0) {
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
            <CheckboxContainer>
                <StyledCheckbox
                    checked={isSelectAll || areAllEntitiesSelected}
                    onChange={(e) => {
                        onChangeSelectAll(e.target.checked as boolean);
                        setAreAllEntitiesSelected?.(false);
                    }}
                    id="search-select-bar"
                    disabled={limit !== undefined && limit > 0}
                />
                <Typography.Text strong type="secondary">
                    {areAllEntitiesSelected ? (
                        <>All {totalResults} assets selected</>
                    ) : (
                        <>{selectedEntityCount} selected</>
                    )}
                </Typography.Text>
                {areAllEntitiesSelected && (
                    <StyledButton
                        variant="text"
                        onClick={() => {
                            onChangeSelectAll(false);
                            setAreAllEntitiesSelected?.(false);
                            setSelectedEntities([]);
                        }}
                    >
                        Clear selection
                    </StyledButton>
                )}
            </CheckboxContainer>
            {!isInFormContext && (
                <ActionsContainer>
                    {showActions && <SearchSelectActions selectedEntities={selectedEntities} refetch={refetch} />}
                    {showCancel && (
                        <CancelButton onClick={onClickCancel} variant="text">
                            Done
                        </CancelButton>
                    )}
                </ActionsContainer>
            )}
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
                    Are you sure you want to exit? {selectedEntityCount} selection(s) will be cleared.
                </div>
            </Modal>
        </>
    );
};
