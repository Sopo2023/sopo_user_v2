import React, { useState } from "react";
import { Text_Field, Text_Field_Main } from "./style";
import deleteButton from "src/assets/imgs/textfield/close_ring_fill.svg";
import openEye from "src/assets/imgs/textfield/open-eye.svg";
import closeEye from "src/assets/imgs/textfield/close-eye.svg";

interface TextFieldProps {
  name:string;
  text?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  style: React.CSSProperties;
  value: string;
}

const TextField = ({
  name,
  onChange,
  placeholder,
  type = "",
  onKeyDown,
  style,
  value,
  
}: TextFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [textBox, setTextBox] = useState(false);
  
  return (
    <Text_Field_Main style={style} $isActive={textBox}>
      <Text_Field
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={
          type == "password" ? (showPassword ? "text" : "password") : "text"
        }
        
        onKeyDown={onKeyDown}
      ></Text_Field>
      
      {type === "text" ? (
        <img src={deleteButton}  onClick={()=>{ }}/>
      ) : (
        <img
          src={showPassword ? openEye : closeEye}
          onClick={() => setShowPassword((prev) => !prev)}
        />
      )}
    </Text_Field_Main>
  );
};

export default TextField;
