import React, { useState } from "react";
import PropTypes from 'prop-types';
import AddCategory from "./Components/AddCategory";
import GifGrid from "./Components/GifGrid";
export default function GifExpertApp() {
    const [categories, setCategories] = useState([
        'Samurai X'
    ]);


    //setcategories(cats => [...cats, e.target.vale])
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory
                categories={categories}
                setCategories={setCategories} />
            <hr />
            <ol>
                {categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))}
            </ol>
        </>
    );
}
AddCategory.prototype = {
    setCategories: PropTypes.func.isRequired
}
