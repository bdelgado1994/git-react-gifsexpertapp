import React, { useState } from "react";

export default function AddCategory({ setCategories, categories }) {
    const [inputValue, setInputValue] = useState('');
    const hadleChage = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue !== undefined) {
            setCategories([
                inputValue, ...categories
            ])
            setInputValue('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type={'text'}
                value={inputValue}
                onChange={hadleChage}
            />
        </form>
    );
}
