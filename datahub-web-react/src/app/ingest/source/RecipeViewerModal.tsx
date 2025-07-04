import Editor from '@monaco-editor/react';
import { Modal } from 'antd';
import React from 'react';
import styled from 'styled-components/macro';

import { Button } from '@src/alchemy-components/components/Button/Button';
import { useCustomTheme } from '@src/customThemeContext';
import { jsonToYaml } from '@app/ingest/source/utils';

const YamlWrapper = styled.div`
    padding: 24px;
`;

interface Props {
    recipe?: string;
    onCancel: () => void;
}

function RecipeViewerModal({ recipe, onCancel }: Props) {
    const { theme } = useCustomTheme();
    const formattedRecipe = recipe ? jsonToYaml(recipe) : '';

    return (
        <Modal
            open
            onCancel={onCancel}
            width={800}
            title="View Ingestion Recipe"
            footer={<div style={{ display: 'flex', justifyContent: 'flex-end' }}><Button color="yellow" onClick={onCancel}>Done</Button></div>}
        >
            <YamlWrapper>
                <Editor
                    theme="vs-dark"
                    options={{
                        readOnly: true,
                        minimap: { enabled: false },
                        scrollbar: {
                            vertical: 'hidden',
                            horizontal: 'hidden',
                        },
                    }}
                    height="55vh"
                    defaultLanguage="yaml"
                    value={formattedRecipe}
                />
            </YamlWrapper>
        </Modal>
    );
}

export default RecipeViewerModal;
