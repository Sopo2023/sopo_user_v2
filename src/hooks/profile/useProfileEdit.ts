import { useState } from "react";
import { useGetProfileList } from "src/queries/profile/profile.query";

const useProfileEdit = () => {
    const { data } = useGetProfileList();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentField, setCurrentField] = useState<string | null>(null);
    const [currentValue, setCurrentValue] = useState<string>("");

    const handleEditClick = (field: string, value: string) => {
        setCurrentField(field);
        setCurrentValue(value);
        setIsModalOpen(true);
    };

    const handleSave = (newValue: string) => {
        console.log(`${currentField} 수정됨: ${newValue}`);
    };

    return {
        data,
        isModalOpen,
        currentField,
        currentValue,
        handleEditClick,
        handleSave,
        setIsModalOpen,
    };
};

export default useProfileEdit;
