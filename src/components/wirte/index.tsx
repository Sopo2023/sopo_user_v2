import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import * as S from "src/components/wirte/index.style"; 

const MarkdownEditor: React.FC = () => {
    const [markdownText, setMarkdownText] = useState<string>('');

    return (
        <S.Container>
            <S.TextArea
                value={markdownText}
                onChange={(e) => setMarkdownText(e.target.value)}
                placeholder="내용을 적어주세요"
            />
            <S.Preview>
                <ReactMarkdown>{markdownText}</ReactMarkdown>
            </S.Preview>
        </S.Container>
    );
};

export default MarkdownEditor;