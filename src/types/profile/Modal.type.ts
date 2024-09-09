export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    value: string;
    onSave: (newValue: string) => void;
}
