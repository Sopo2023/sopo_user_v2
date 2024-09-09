import React from "react";
import * as S from "./style";
import { ModalProps } from "src/types/profile/Modal.type";
import { schoolOptions } from "src/constants/profile/schoolOptions";
import useModal from "src/hooks/profile/useModal";

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, value, onSave }) => {
    const {
        inputValue,
        selectedSchool,
        password,
        setInputValue,
        setSelectedSchool,
        setPassword,
        handleSave
    } = useModal(value, title);

    if (!isOpen) return null;

    return (
        <S.ModalOverlay>
            <S.ModalContainer>
                {title === "학교" ? (
                    <>
                        <S.Title>새로운 학교를 선택해주세요</S.Title>
                        <S.Select
                            value={selectedSchool}
                            onChange={(e) => setSelectedSchool(e.target.value)}
                        >
                            {schoolOptions.map((school) => (
                                <option key={school} value={school}>
                                    {school}
                                </option>
                            ))}
                        </S.Select>
                    </>
                ) : title === "이름" ? (
                    <>
                        <S.Title>새로운 이름을 입력해주세요</S.Title>
                        <S.Input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="새로운 이름 입력"
                        />
                    </>
                ) : title === "이메일" ? (
                    <>
                        <S.Title>새로운 이메일을 입력해주세요</S.Title>
                        <S.Input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="새로운 이메일을 입력"
                        />
                    </>
                ) : title === "비밀번호" ? (
                    <>
                        <S.Title>새로운 비밀번호를 입력해주세요</S.Title>
                        <S.Input
                            type="password"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="새로운 비밀번호 입력"
                        />
                    </>
                ) : (
                    <>
                        <S.Input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                    </>
                )}

                {(title === "학교" || title === "이름" || title === "이메일" || title === "비밀번호") && (
                    <>
                        <S.pwTitle>기존의 비밀번호를 입력해주세요</S.pwTitle>
                        <S.Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="비밀번호 입력"
                        />
                    </>
                )}

                <S.buttonWrap>
                    <S.cancelButton onClick={onClose}>취소</S.cancelButton>
                    <S.saveButton onClick={() => handleSave(onSave, onClose)}>저장</S.saveButton>
                </S.buttonWrap>
            </S.ModalContainer>
        </S.ModalOverlay>
    );
};

export default Modal;
