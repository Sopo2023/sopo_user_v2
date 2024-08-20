import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from 'src/components/home/portfolio/write/index.style';

import BackArrow from 'src/assets/imgs/markdown/GotoBack.svg';
import Portfolio from 'src/assets/imgs/sidebar/portfolio.svg';
import GoOut from 'src/assets/imgs/sidebar/logouticon.svg';
import DeleteButton from 'src/assets/imgs/markdown/deletetbn.svg';
import { SepLine } from '../../markdown/index.style';

const MarkdownEditor = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [tags, setTags] = useState<string[]>([]);
    const [currentInput, setCurrentInput] = useState<string>('');
    const [oneLineAboutMe, setAboutMeLine] = useState<string>('');
    const [schools, setSchools] = useState<string[]>([]);
    const [contacts, setContacts] = useState<string[]>([]); 

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
        setCurrentInput(value);
    };

    const handleAboutMeInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setAboutMeLine(value);
    };

    const handleSchoolChange = (index: number, value: string) => {
        const newSchools = [...schools];
        newSchools[index] = value;
        setSchools(newSchools);
    };

    const handleAddSchool = () => {
        setSchools([...schools, '']);
    };

    const handleRemoveSchool = (index: number) => {
        setSchools(schools.filter((_, i) => i !== index));
    };

    const handleRemoveAllSchools = () => {
        setSchools([]);
    };

    const handleContactChange = (index: number, value: string) => {
        const newContacts = [...contacts];
        newContacts[index] = value;
        setContacts(newContacts);
    };

    const handleAddContact = () => {
        setContacts([...contacts, '']);
    };

    const handleRemoveContact = (index: number) => {
        setContacts(contacts.filter((_, i) => i !== index));
    };

    const handleRemoveAllContacts = () => {
        setContacts([]);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === ' ') {
            if (currentInput.trim() !== '') {
                setTags([...tags, currentInput.trim()]);
                setCurrentInput('');
            }
        } else if (e.key === 'Backspace' && currentInput === '' && tags.length > 0) {
            setTags(tags.slice(0, -1));
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
                            onKeyDown={handleKeyDown}
                            placeholder={tags.length === 0 && currentInput === '' ? "나를 가장 잘 나타낼 수 있는 태그를 입력해주세요" : ""}
                        />
                    </S.TagsContainer>

                    <S.OneLineAboutME
                        value={oneLineAboutMe}
                        onChange={handleAboutMeInputChange}
                        placeholder="당신은 어떤 사람인가요? 당신에 대한 한 문장을 남겨주세요."
                    />

                    <S.SchoolContainer>
                        <S.SemiTitle> 학력 </S.SemiTitle>
                        <SepLine/>
                        {schools.length === 0 ? (
                            <S.NoSchoolMessage>
                                아직 추가 된 학력이 없어요!
                            </S.NoSchoolMessage>
                        ) : (
                            <S.SchoolList> 
                                {schools.map((school, index) => (
                                    <S.SchoolRow key={index}>
                                        <S.SchoolInput
                                            value={school}
                                            onChange={(e) => handleSchoolChange(index, e.target.value)}
                                            placeholder={`학력 ${index + 1}`}
                                        />
                                        <S.RemoveSchoolButton onClick={() => handleRemoveSchool(index)}>
                                            <S.RemoveSchoolButtonImg src={DeleteButton}/>
                                        </S.RemoveSchoolButton>
                                    </S.SchoolRow>
                                ))}
                            </S.SchoolList>
                        )}
                        <S.ButtonsContainer>
                            <S.AddSchoolButton onClick={handleAddSchool}>
                                추가
                            </S.AddSchoolButton>
                            {schools.length > 0 && (
                                <S.RemoveAllButton onClick={handleRemoveAllSchools}>
                                    모두 삭제
                                </S.RemoveAllButton>
                            )}
                        </S.ButtonsContainer>
                    </S.SchoolContainer>

                    <S.SchoolContainer>
                        <S.SemiTitle> 연락 & 채널 </S.SemiTitle>
                        <SepLine/>
                        {contacts.length === 0 ? (
                            <S.NoSchoolMessage>
                                사람들이 당신을 찾도록 정보를 추가해주세요
                            </S.NoSchoolMessage>
                        ) : (
                            <S.SchoolList> 
                                {contacts.map((contact, index) => (
                                    <S.SchoolRow key={index}>
                                        <S.SchoolInput
                                            value={contact}
                                            onChange={(e) => handleContactChange(index, e.target.value)}
                                            placeholder={`연락 & 채널 ${index + 1}`}
                                        />
                                        <S.RemoveSchoolButton onClick={() => handleRemoveContact(index)}>
                                            <S.RemoveSchoolButtonImg src={DeleteButton}/>
                                        </S.RemoveSchoolButton>
                                    </S.SchoolRow>
                                ))}
                            </S.SchoolList>
                        )}
                        <S.ButtonsContainer>
                            <S.AddSchoolButton onClick={handleAddContact}>
                                추가
                            </S.AddSchoolButton>
                            {contacts.length > 0 && (
                                <S.RemoveAllButton onClick={handleRemoveAllContacts}>
                                    모두 삭제
                                </S.RemoveAllButton>
                            )}
                        </S.ButtonsContainer>
                    </S.SchoolContainer>
                    
                    <S.SaveBarContainer>
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
                    </S.SaveBarContainer>
                </S.EditorContainer>
            </S.Container>
        </S.ContainerParents>
    );
};

export default MarkdownEditor;