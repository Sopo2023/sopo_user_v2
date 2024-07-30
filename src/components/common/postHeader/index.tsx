import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as S from 'src/components/common/postHeader/index.style';

import SeniorToJuniorImg from 'src/assets/imgs/sidebar/metometi.svg';
import PortfolioImg from 'src/assets/imgs/sidebar/portfolio.svg';
import CompetitionImg from 'src/assets/imgs/sidebar/competition.svg';
import ArrowImg from 'src/assets/imgs/sidebar/logouticon.svg';
import LastestImg from 'src/assets/imgs/sidebar/lastestImg.svg';
import SearchIcon from 'src/assets/imgs/postHeader/searchIcon.svg';

import useSearchResults from 'src/hooks/postheader/usePostHeader';

const PostHeader: React.FC = () => {
  const [pageTitleImg, setPageTitleImg] = useState<string>(SeniorToJuniorImg);
  const [pageTitleText, setPageTitleText] = useState<string>('선배가 후배에게');
  const [buttonText, setButtonText] = useState<string>('글쓰기');
  const location = useLocation();
  const { searchTerm, searchResults, handleSearchChange, handleSearchSubmit } = useSearchResults();

  useEffect(() => {
    switch (location.pathname) {
      case '/seniortojunior':
        setPageTitleImg(SeniorToJuniorImg);
        setPageTitleText('선배가 후배에게');
        setButtonText('글쓰기');
        break;
      case '/portfolio':
        setPageTitleImg(PortfolioImg);
        setPageTitleText('포트폴리오');
        setButtonText('포트폴리오 작성');
        break;
      case '/competition':
        setPageTitleImg(CompetitionImg);
        setPageTitleText('대회');
        setButtonText('대회 글 작성');
        break;
      default:
        setPageTitleImg(SeniorToJuniorImg);
        setPageTitleText('Error');
        setButtonText('글쓰기');
    }
  }, [location.pathname]);

  return (
    <S.PageTitle>
      <S.ImgWrap>
        <S.PageTitleImg src={pageTitleImg} />
      </S.ImgWrap>
      <S.PageTitleText>{pageTitleText}</S.PageTitleText>
      <S.ButtonText>
        인기
        <S.ArrowImg src={ArrowImg} />
      </S.ButtonText>
      <S.ButtonText>
        최신
        <S.LastestImg src={LastestImg} />
      </S.ButtonText>
      <S.SearchBox onSubmit={handleSearchSubmit}>
        <S.SearchInput
          type="text"
          placeholder="궁금한 것을 찾아보세요"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <S.SearchIconWrap>
          <S.SearchIconImg src={SearchIcon} />
        </S.SearchIconWrap>
      </S.SearchBox>
      <S.StartWirteButton>
        {buttonText}
      </S.StartWirteButton>

      {searchResults.length > 0 && (
        <div>
          <h3>검색 결과 :</h3>
          <ul>
            {searchResults.map(result => (
              <li key={result.id}>{result.title}</li>
            ))}
          </ul>
        </div>
      )}
    </S.PageTitle>
  );
}

export default PostHeader;