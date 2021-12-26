import React from "react";
import GifsGridItem from "./GifsGridItem";

import { useFetchGifs } from "../Hooks/useFetchGifd";
export default function GifGrid({ category }) {
    /*const [image, setImage] = useState([])*/

    const { loading, data } = useFetchGifs(category);

    return (
        <>
            <h2>{category}</h2>
            {loading === true ? 'Cargando...' : (
                <div className="card-grid">
                    {data.map(({ id, title, url }) => (
                        <GifsGridItem key={id}
                            id={id}
                            title={title}
                            url={url}
                        />
                    ))}
                </div>
            )}

        </>
    );
}