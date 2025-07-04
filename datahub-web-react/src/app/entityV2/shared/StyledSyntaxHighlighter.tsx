import Editor, { loader } from '@monaco-editor/react';
import React from 'react';
import styled from 'styled-components';

const baseUrl = import.meta.env.BASE_URL;
loader.config({
    paths: {
        vs: `${baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`}node_modules/monaco-editor/min/vs`,
    },
});

const StyledEditorContainer = styled.div`
    font-family: 'Roboto Mono', monospace;
    
    .monaco-editor {
        background: transparent !important;
    }
    
    .monaco-editor .margin {
        background: transparent !important;
    }
`;

interface StyledSyntaxHighlighterProps {
    children: string;
    language?: string;
    customStyle?: React.CSSProperties;
    className?: string;
    showLineNumbers?: boolean;
}

export const StyledSyntaxHighlighter: React.FC<StyledSyntaxHighlighterProps> = ({
    children,
    language = 'sql',
    customStyle,
    className,
    showLineNumbers = false,
}) => {
    const editorHeight = Math.max(20 * children.split('\n').length, 100);
    
    return (
        <StyledEditorContainer className={className} style={customStyle}>
            <Editor
                height={`${editorHeight}px`}
                language={language}
                value={children}
                options={{
                    readOnly: true,
                    minimap: { enabled: false },
                    scrollbar: {
                        vertical: 'hidden',
                        horizontal: 'hidden',
                    },
                    lineNumbers: showLineNumbers ? 'on' : 'off',
                    folding: false,
                    glyphMargin: false,
                    lineDecorationsWidth: showLineNumbers ? undefined : 0,
                    lineNumbersMinChars: showLineNumbers ? undefined : 0,
                    renderLineHighlight: 'none',
                    scrollBeyondLastLine: false,
                    wordWrap: 'on',
                }}
            />
        </StyledEditorContainer>
    );
};
