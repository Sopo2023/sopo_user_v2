import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

import * as S from "src/components/markdown/index.style";

import H1 from "src/assets/imgs/markdown/H1.svg"
import H2 from "src/assets/imgs/markdown/H2.svg"
import H3 from "src/assets/imgs/markdown/H3.svg"
import H4 from "src/assets/imgs/markdown/H4.svg"
import Bold from "src/assets/imgs/markdown/Bold.svg"
import Italic from "src/assets/imgs/markdown/I.svg"
import Stroke from "src/assets/imgs/markdown/t.svg"
import Quote from "src/assets/imgs/markdown/quotes.svg"
import Img from "src/assets/imgs/markdown/image.svg"
import Code from "src/assets/imgs/markdown/code.svg"

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
                    <S.MarkdownButton onClick={() => insertMarkdown('# ')}>
                        <S.ButtonTitleImg src={H1}/>
                    </S.MarkdownButton>
                    <S.MarkdownButton onClick={() => insertMarkdown('## ')}>
                        <S.ButtonTitleImg src={H2}/>
                    </S.MarkdownButton>
                    <S.MarkdownButton onClick={() => insertMarkdown('### ')}>
                        <S.ButtonTitleImg src={H3}/>
                    </S.MarkdownButton>
                    <S.MarkdownButton onClick={() => insertMarkdown('#### ')}>
                        <S.ButtonTitleImg src={H4}/>
                    </S.MarkdownButton>
                    <S.MarkdownButton onClick={() => insertMarkdown('**')}>
                        <S.ButtonBoldImg src={Bold}/>
                    </S.MarkdownButton>
                    <S.MarkdownButton onClick={() => insertMarkdown('_')}>
                        <S.ButtonItalicImg src={Italic}/>
                    </S.MarkdownButton>
                    <S.MarkdownButton onClick={() => insertMarkdown('~~')}>
                        <S.ButtonStrokeImg src={Stroke}/>
                    </S.MarkdownButton>
                    <S.MarkdownButton onClick={() => insertMarkdown('> ')}>
                        <S.ButtonQuoteImg src={Quote}/>
                    </S.MarkdownButton>
                    <S.MarkdownButton onClick={() => insertMarkdown('![]()')}>
                        <S.ButtonImageImg src={Img}/>
                    </S.MarkdownButton>
                    <S.MarkdownButton onClick={() => insertMarkdown('```')}>
                        <S.ButtonCodeImg src={Code}/>
                    </S.MarkdownButton>
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