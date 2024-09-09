import { useState } from "react";
import { schoolOptions } from "src/constants/profile/schoolOptions";

const useModal = (value: string, title: string) => {
    const [inputValue, setInputValue] = useState(value);
    const [selectedSchool, setSelectedSchool] = useState(schoolOptions[0]);
    const [password, setPassword] = useState("");

    const handleSave = (onSave: (newValue: string) => void, onClose: () => void) => {
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

    return {
        inputValue,
        selectedSchool,
        password,
        setInputValue,
        setSelectedSchool,
        setPassword,
        handleSave
    };
};

export default useModal;
