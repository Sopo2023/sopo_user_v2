import React from "react"
import {ButtonBox} from "./style";
import {ButtonProps} from "src/types/textField/textField.type";


const Button = ({ text = '계속하기', onClick, style }:ButtonProps)=>{

return(
     <ButtonBox onClick={onClick}>
            {text}
     </ButtonBox>
)

}
export default Button