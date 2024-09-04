import React, { useState } from "react";
import * as S from "./style";
import { ModalProps } from "src/types/profile/Modal.type";
import { buttonWrap, cancelButton, Input, pwTitle, saveButton, Select } from "./style";
import { useGetProfileList } from "src/queries/profile/profile.query";
import { schoolOptions } from "src/constants/profile/schoolOptions";

const Modal = ({ isOpen, onClose, title, value, onSave }: ModalProps) => {
    const [inputValue, setInputValue] = useState(value);
    const [selectedSchool, setSelectedSchool] = useState(schoolOptions[0]);
    const [password, setPassword] = useState("");

    if (!isOpen) return null;

    const handleSave = () => {
        if (title === "학교") {
            onSave(selectedSchool);
        } else if (title === "이름") {
            onSave(inputValue);
        } else if (title === "비밀번호") {
            onSave(password);
        } else {
            onSave(inputValue);
        }
        onClose();
    };

    return (
        <S.ModalOverlay>
            <S.ModalContainer>
                {title === "학교" ? (
                    <>
                        <S.Title>새로운 학교를 선택해주세요</S.Title>
                        <Select
                            value={selectedSchool}
                            onChange={(e) => setSelectedSchool(e.target.value)}
                        >
                            {schoolOptions.map((school) => (
                                <option key={school} value={school}>
                                    {school}
                                </option>
                            ))}
                        </Select>
                    </>
                ) : title === "이름" ? (
                    <>
                        <S.Title>새로운 이름을 입력해주세요</S.Title>
                        <Input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="새로운 이름 입력"
                        />
                    </>
                ) :  title === "이메일" ? (
                    <>
                        <S.Title>새로운 이메일을 입력해주세요</S.Title>
                        <Input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="새로운 이메일을 입력"
                        />
                    </>
                ) :title === "비밀번호" ? (
                    <>
                        <S.Title>새로운 비밀번호를 입력해주세요</S.Title>
                        <Input
                            type="password"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="새로운 비밀번호 입력"
                        />
                    </>
                ) : (
                    <>
                        <Input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                    </>
                )}

                {title === "학교" || title === "이름" || title === "이메일" || title === "비밀번호" ? (
                    <>
                        <S.pwTitle>기존의 비밀번호를 입력해주세요</S.pwTitle>
                        <Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="비밀번호 입력"
                        />
                    </>
                ) : null}

                <S.buttonWrap>
                    <S.cancelButton onClick={onClose}>취소</S.cancelButton>
                    <S.saveButton onClick={handleSave}>저장</S.saveButton>
                </S.buttonWrap>
            </S.ModalContainer>
        </S.ModalOverlay>
    );
};

export default Modal;
