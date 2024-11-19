import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import color from 'src/styles/color';
interface CodeTextFieldProps {
  codeValue: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

const CodeTextField = ({ codeValue, onChange }:CodeTextFieldProps) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [inputValues, setInputValues] = useState<string[]>(Array(6).fill(''));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value.toUpperCase();
    if (value === ' ') return; 
    const updatedValues = [...inputValues];

    if (value.length <= 1) {
      updatedValues[index] = value;
      setInputValues(updatedValues);

      
      onChange({
        ...e,
        target: { ...e.target,name:"authCode", value: updatedValues.join('') },
      });

      
      if (value && index < 5 && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1]!.focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace') {
      if (!inputValues[index] && index > 0 && inputRefs.current[index - 1]) {
        inputRefs.current[index - 1]!.focus();
      }
    }
  };

  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => (
        <InputCode
          key={index}
          type="text"
          value={inputValues[index] || ''}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => (inputRefs.current[index] = el)}
          maxLength={1}
        />
      ))}
    </>
  );
};

export default CodeTextField;

const InputCode = styled.input`
  width: 50px;
  height: 50px;
  text-Align: center;
  font-Size: 20px;
  border-Radius: 10px;
  border: 1px solid #ccc;
  &:focus {
    border:2px solid ${color.Primary.Light};
    outline: none;
    }
`