import { useState } from 'react';
import axios from 'axios';

export const useMarkdownEditor = () => {
    const [title, setTitle] = useState<string>('');
    const [markdownText, setMarkdownText] = useState<string>('');
    const [titleColor, setTitleColor] = useState<string>('var(--Neutral-60, #858585)');
    const [textAreaColor, setTextAreaColor] = useState<string>('var(--Neutral-60, #858585)');
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [selectedLanguage, setSelectedLanguage] = useState<string>('javascript');

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setTitle(value);
        setTitleColor(value ? 'black' : 'var(--Neutral-60, #858585)');
    };

    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setMarkdownText(value);
        setTextAreaColor(value ? 'black' : 'var(--Neutral-60, #858585)');
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file);
            const formData = new FormData();
            formData.append('image', file);

            try {
                const response = await axios.post('http://localhost:3001/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                const { url } = response.data;
                const imgMarkdown = `![](${url})`;
                setMarkdownText(markdownText + '\n' + imgMarkdown);
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        }
    };

    const insertMarkdown = (syntax: string) => {
        const textArea = document.getElementById('markdown-textarea') as HTMLTextAreaElement;
        const start = textArea.selectionStart;
        const end = textArea.selectionEnd;
        const before = markdownText.substring(0, start);
        const after = markdownText.substring(end);
        const selectedText = markdownText.substring(start, end);

        let newText = '';

        switch (syntax) {
            case '**':
            case '_':
            case '~~':
                newText = before + syntax + selectedText + syntax + after;
                break;
            case '> ':
                newText = before + syntax + selectedText + after;
                break;
            case '![]()':
                newText = before + syntax + after;
                break;
            case '```':
                newText = before + `\`\`\`${selectedLanguage}\n` + selectedText + '\n```' + after;
                break;
            case '<br/>':
                newText = before + '<br/>' + after;
                break;
            case '<hr/>':
                newText = before + '<hr/>' + after;
                break;
            default:
                newText = before + syntax + selectedText + after;
                break;
        }

        setMarkdownText(newText);

        setTimeout(() => {
            textArea.selectionStart = textArea.selectionEnd = start + syntax.length;
            textArea.focus();
        }, 0);
    };

    return {
        title,
        setTitle,
        markdownText,
        setMarkdownText,
        titleColor,
        textAreaColor,
        setTitleColor,
        setTextAreaColor,
        handleTitleChange,
        handleTextAreaChange,
        handleFileChange,
        insertMarkdown,
        selectedLanguage,
        setSelectedLanguage
    };
};