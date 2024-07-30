import React from 'react'
import * as S from 'src/components/common/postHeader/index.style'
import SeniorToJuniorImg from 'src/assets/imgs/sidebar/metometi.svg'

const postHeader = () => {
  return (
    <S.PageTitle>
        <S.ImgWrap>
            <S.PageTitleImg src={SeniorToJuniorImg} />
        </S.ImgWrap>
        <S.PageTitleText>선배가 후배에게</S.PageTitleText>
        <button></button>
    </S.PageTitle>
  )
}

export default postHeader