import React, { useState } from "react";
import PropTypes from 'prop-types';

export default function AddCategory({ setCategories, categories }) {
    const [inputValue, setInputValue] = useState('');
    const handleChage = (e) => {
        setInputValue(e.target.value);
        console.log('Handle Change Cambiado');
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
                onChange={handleChage}
            />
        </form>
    );
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};