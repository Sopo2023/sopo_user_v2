import React from "react";
import * as S from 'src/components/home/seniortojunior/index.style';
import SeniorToJuniorImg from "src/assets/imgs/sidebar/metometi.svg";
import PostHeader from 'src/components/common/postHeader/index'

const Seniortojunior = () => {
    return (
        <S.ContainerParents>
            <S.Container>
                <PostHeader/>
            </S.Container>
        </S.ContainerParents>
    );
};

export default Seniortojunior;