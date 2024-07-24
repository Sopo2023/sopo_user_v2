import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import * as S from "src/components/wirte/index.style";

const MarkdownEditor: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const [markdownText, setMarkdownText] = useState<string>('');

    const insertMarkdown = (syntax: string) => {
        const textArea = document.getElementById('markdown-textarea') as HTMLTextAreaElement;
        const start = textArea.selectionStart;
        const end = textArea.selectionEnd;
        const before = markdownText.substring(0, start);
        const after = markdownText.substring(end);
        const selectedText = markdownText.substring(start, end);

        if (syntax === '**') {
            setMarkdownText(before + syntax + selectedText + syntax + after);
        } else if (syntax === '_') {
            setMarkdownText(before + syntax + selectedText + syntax + after);
        } else if (syntax === '~~') {
            setMarkdownText(before + syntax + selectedText + syntax + after);
        } else if (syntax === '> ') {
            setMarkdownText(before + syntax + selectedText + after);
        } else if (syntax === '![]()') {
            setMarkdownText(before + syntax + after);
        } else if (syntax === '```') {
            setMarkdownText(before + syntax + '\n' + selectedText + '\n' + syntax + after);
        } else {
            setMarkdownText(before + syntax + selectedText + after);
        }

        setTimeout(() => {
            textArea.selectionStart = textArea.selectionEnd = start + syntax.length;
            textArea.focus();
        }, 0);
    };

    return (
        <S.Container>
            <S.EditorContainer>
                <S.TitleInput
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="제목을 입력하세요"
                />
                <S.ButtonContainer>
                    <S.MarkdownButton onClick={() => insertMarkdown('# ')}>H1</S.MarkdownButton>
                    <S.MarkdownButton onClick={() => insertMarkdown('## ')}>H2</S.MarkdownButton>
                    <S.MarkdownButton onClick={() => insertMarkdown('### ')}>H3</S.MarkdownButton>
                    <S.MarkdownButton onClick={() => insertMarkdown('#### ')}>H4</S.MarkdownButton>
                    <S.MarkdownButton onClick={() => insertMarkdown('**')}>B</S.MarkdownButton>
                    <S.MarkdownButton onClick={() => insertMarkdown('_')}>i</S.MarkdownButton>
                    <S.MarkdownButton onClick={() => insertMarkdown('~~')}>s</S.MarkdownButton>
                    <S.MarkdownButton onClick={() => insertMarkdown('> ')}>""</S.MarkdownButton>
                    <S.MarkdownButton onClick={() => insertMarkdown('![]()')}>img</S.MarkdownButton>
                    <S.MarkdownButton onClick={() => insertMarkdown('```')}>c</S.MarkdownButton>
                </S.ButtonContainer>
                <S.TextArea
                    id="markdown-textarea"
                    value={markdownText}
                    onChange={(e) => setMarkdownText(e.target.value)}
                    placeholder="내용을 입력하세요"
                />
            </S.EditorContainer>
            <S.Preview>
                <h1>{title}</h1>
                <ReactMarkdown>{markdownText}</ReactMarkdown>
            </S.Preview>
        </S.Container>
    );
};

export default MarkdownEditor;