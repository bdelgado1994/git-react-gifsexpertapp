import { useState, useEffect } from 'react';
import { getGifs } from "../helpers/GetGifs";
import PropTypes from 'prop-types';
export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });
    useEffect(() => {

        getGifs(category).then(img => setTimeout(() => {
            setstate({
                data: img,
                loading: false
            })
        }, 3000));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category]);

    return state;
}