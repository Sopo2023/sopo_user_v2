import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from 'src/components/home/portfolio/write/index.style';

import BackArrow from 'src/assets/imgs/markdown/GotoBack.svg';
import Portfolio from 'src/assets/imgs/sidebar/portfolio.svg';
import GoOut from 'src/assets/imgs/sidebar/logouticon.svg';

const MarkdownEditor = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [tags, setTags] = useState<string[]>([]);
    const [currentInput, setCurrentInput] = useState<string>('');

    const handleBackArrowClick = () => {
        const path = location.pathname.split('/')[1];
        if (path === 'portfolio') {
            navigate('/portfolio');
        } else {
            navigate('/');
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value.includes(' ')) {
            setTags([...tags, value.trim()]);
            setCurrentInput('');
        } else {
            setCurrentInput(value);
        }
    };

    const handleRemoveTag = (index: number) => {
        setTags(tags.filter((_, i) => i !== index));
    };

    const getPageTitle = () => {
        const path = location.pathname.split('/')[1];
        switch (path) {
            case 'portfolio':
                return '포트폴리오';
            default:
                return '글쓰기'; 
        }
    };

    const getPageIcon = () => {
        const path = location.pathname.split('/')[1];
        switch (path) {
            case 'portfolio':
                return Portfolio;
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
                        placeholder="제목을 입력하세요"
                    />
                    <S.SepLine />

                    <S.TagsContainer>
                        {tags.map((tag, index) => (
                            <S.Tag key={index} onClick={() => handleRemoveTag(index)}>
                                {tag}
                            </S.Tag>
                        ))}
                        <S.TextArea
                            value={currentInput}
                            onChange={handleInputChange}
                            placeholder="나를 가장 잘 나타낼 수 있는 태그를 입력해주세요"
                        />
                    </S.TagsContainer>

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
            </S.Container>
        </S.ContainerParents>
    );
};

export default MarkdownEditor;