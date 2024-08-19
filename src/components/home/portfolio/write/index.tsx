import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useMarkdownEditor } from 'src/hooks/markdowneditor/useMarkdownEditor';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from 'src/components/home/portfolio/write/index.style';

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
import BackArrow from 'src/assets/imgs/markdown/GotoBack.svg';
import Portfolio from 'src/assets/imgs/sidebar/portfolio.svg';
import MentoMenti from 'src/assets/imgs/sidebar/metometi.svg';
import Contest from 'src/assets/imgs/sidebar/competition.svg';
import GoOut from 'src/assets/imgs/sidebar/logouticon.svg'

const MarkdownEditor = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleBackArrowClick = () => {
        const path = location.pathname.split('/')[1];
        if (path === 'portfolio') {
            navigate('/portfolio');
        } else {
            navigate('/');
        }
    };

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

    const getPageTitle = () => {
        const path = location.pathname.split('/')[1];
        switch (path) {
            case 'portfolio':
                return '포트폴리오';
            case 'seniortojunior':
                return '선배가 후배에게';
            case 'contest':
                return '대회';
            default:
                return '글쓰기'; 
        }
    };

    const getPageIcon = () => {
        const path = location.pathname.split('/')[1];
        switch (path) {
            case 'portfolio':
                return Portfolio;
            case 'seniortojunior':
                return MentoMenti;
            case 'contest':
                return Contest;
            default:
                return null; 
        }
    };

    return (
        <S.ContainerParents>
            <S.Container>
                <S.EditorContainer>
                    <S.TitleContainer>
                        <S.BackArrowButton onClick={handleBackArrowClick}> 
                            <S.BackArrowImg src={BackArrow}/> 
                        </S.BackArrowButton>
                        <S.MarkImg>
                            <S.PageImg src={getPageIcon()} alt="Page"/>
                        </S.MarkImg>
                        <S.PageTitle>{getPageTitle()}</S.PageTitle>
                    </S.TitleContainer>
                    <S.TitleInput
                        value={title}
                        onChange={handleTitleChange}
                        placeholder="제목을 입력하세요"
                        style={{ color: titleColor }}
                    />
                    <S.SepLine />
                    
                    <S.TextArea
                        id="markdown-textarea"
                        value={markdownText}
                        onChange={handleTextAreaChange}
                        placeholder="내용을 입력하세요"
                        style={{ color: textAreaColor }}
                    />
                    <S.SaveBar>
                        <S.GoOutButton>
                            <S.LeftArrow src={GoOut}/>
                            <S.GoOutText>나가기</S.GoOutText>
                        </S.GoOutButton>
                        <S.SaveButton>
                            <S.TemporarySave>임시저장</S.TemporarySave>
                            <S.PostButton>등록</S.PostButton>
                        </S.SaveButton>
                    </S.SaveBar>
                </S.EditorContainer>
                <S.PreviewContainer>
                    <S.Preview>
                        <S.PreviewTitle>preview</S.PreviewTitle>
                        <S.RealTitle>{title}</S.RealTitle>
                        <S.ContextSepLine />
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