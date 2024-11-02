import React, { useState, useCallback } from "react";
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
  const [internalValue, setInternalValue] = useState(value);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
    if(name==="authCode"){
      setInternalValue(e.target.value.toUpperCase());
    }else{
      setInternalValue(e.target.value);
    }
      
            
      if (onChange) {
        onChange(e);
      }
    },
    [onChange]
  );

  const handleClear = useCallback(() => {
    setInternalValue("");
    if (onChange) {
      onChange({ target: { name, value: "" } } as React.ChangeEvent<HTMLInputElement>);
    }
  }, [onChange, name]);

  return (
    <Text_Field_Main style={style} $isActive={textBox}>
      <Text_Field
        name={name}
        value={internalValue}
        onChange={handleChange}
        placeholder={placeholder}
        type={
          type == "password" ? (showPassword ? "text" : "password") : "text"
        }
        maxLength={name === "memberEmail" ? 30 :15}
        onKeyDown={onKeyDown}
      ></Text_Field>
      
      {type === "text" ? (
          <img src={deleteButton} onClick={handleClear} />
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
