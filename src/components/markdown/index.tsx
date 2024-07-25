import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import * as S from 'src/components/markdown/index.style';
import H1 from 'src/assets/imgs/markdown/H1.svg';
import H2 from 'src/assets/imgs/markdown/H2.svg';
import H3 from 'src/assets/imgs/markdown/H3.svg';
import H4 from 'src/assets/imgs/markdown/H4.svg';
import Bold from 'src/assets/imgs/markdown/Bold.svg';
import Italic from 'src/assets/imgs/markdown/I.svg';
import Stroke from 'src/assets/imgs/markdown/t.svg';
import Quote from 'src/assets/imgs/markdown/quotes.svg';
import Img from 'src/assets/imgs/markdown/image.svg';
import Code from 'src/assets/imgs/markdown/code.svg';
import { useMarkdownEditor } from 'src/hooks/markdowneditor/useMarkdownEditor';

const MarkdownEditor = () => {
    const {
        title,
        handleTitleChange,
        markdownText,
        handleTextAreaChange,
        titleColor,
        textAreaColor,
        handleFileChange,
        insertMarkdown,
        selectedLanguage,
        setSelectedLanguage
    } = useMarkdownEditor();

    return (
        <S.ContainerParents>
            <S.Container>
                <S.EditorContainer>
                    <S.TitleInput
                        value={title}
                        onChange={handleTitleChange}
                        placeholder="제목을 입력하세요"
                        style={{ color: titleColor }}
                    />
                    <S.SepLine />
                    <S.ButtonContainer>
                        <S.MarkdownButton onClick={() => insertMarkdown('# ')}>
                            <S.ButtonTitleImg src={H1} />
                        </S.MarkdownButton>
                        <S.MarkdownButton onClick={() => insertMarkdown('## ')}>
                            <S.ButtonTitleImg src={H2} />
                        </S.MarkdownButton>
                        <S.MarkdownButton onClick={() => insertMarkdown('### ')}>
                            <S.ButtonTitleImg src={H3} />
                        </S.MarkdownButton>
                        <S.MarkdownButton onClick={() => insertMarkdown('#### ')}>
                            <S.ButtonTitleImg src={H4} />
                        </S.MarkdownButton>
                        <S.MarkdownButton onClick={() => insertMarkdown('**')}>
                            <S.ButtonBoldImg src={Bold} />
                        </S.MarkdownButton>
                        <S.MarkdownButton onClick={() => insertMarkdown('_')}>
                            <S.ButtonItalicImg src={Italic} />
                        </S.MarkdownButton>
                        <S.MarkdownButton onClick={() => insertMarkdown('~~')}>
                            <S.ButtonStrokeImg src={Stroke} />
                        </S.MarkdownButton>
                        <S.MarkdownButton onClick={() => insertMarkdown('> ')}>
                            <S.ButtonQuoteImg src={Quote} />
                        </S.MarkdownButton>
                        <S.MarkdownButton onClick={() => document.getElementById('file-input')?.click()}>
                            <S.ButtonImageImg src={Img} />
                        </S.MarkdownButton>
                        <S.MarkdownButton onClick={() => insertMarkdown('```')}>
                            <S.ButtonCodeImg src={Code} />
                        </S.MarkdownButton>
                        <input
                            id="file-input"
                            type="file"
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                        />
                    </S.ButtonContainer>
                    <S.LanguageSelector
                        value={selectedLanguage}
                        onChange={(e) => setSelectedLanguage(e.target.value)}
                    >
                        <option value="javascript">JavaScript</option>
                        <option value="python">Python</option>
                        <option value="java">Java</option>
                        <option value="c">C</option>
                        <option value="cpp">C++</option>
                        <option value="ruby">Ruby</option>
                        <option value="go">Go</option>
                        <option value="html">HTML</option>
                        <option value="css">CSS</option>
                    </S.LanguageSelector>
                    <S.TextArea
                        id="markdown-textarea"
                        value={markdownText}
                        onChange={handleTextAreaChange}
                        placeholder="내용을 입력하세요"
                        style={{ color: textAreaColor }}
                    />
                </S.EditorContainer>
                <S.PreviewContainer>
                    <S.Preview>
                        <h1>{title}</h1>
                        <ReactMarkdown
                            children={markdownText}
                            components={{
                                code({ node, className, children, ...props }) {
                                    const language = className?.replace('language-', '') || 'javascript';
                                    return (
                                        <SyntaxHighlighter
                                            language={language}
                                            style={solarizedlight} 
                                            {...props as any} 
                                        >
                                            {String(children).replace(/\n$/, '')}
                                        </SyntaxHighlighter>
                                    );
                                }
                            }}
                        />
                    </S.Preview>
                </S.PreviewContainer>
            </S.Container>
        </S.ContainerParents>
    );
};

export default MarkdownEditor;