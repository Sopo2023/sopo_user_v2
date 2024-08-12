import styled from "styled-components"
import { useNavigate } from "react-router-dom"

const SignNavigate=()=>{
    const navigate=useNavigate();
return(
    <NullBox>
        <span onClick={()=>navigate("/sign")}>로그인 하러가기</span>
    </NullBox>
)
}

export default SignNavigate 

export const NullBox = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`