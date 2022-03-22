import React, { useState, useEffect } from "react";
// import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
    // const [images, setImages] = useState([]);
    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h2>{category}</h2>
            {loading && (
                <p className="animate__animated animate__flash animate__delay-5s">
                    Loading....
                </p>
            )}
            {
                <div className="card-grid">
                    {images.map((img) => {
                        return <GifGridItem key={img.id} {...img} />;
                    })}
                </div>
            }
        </>
    );
};

export default GifGrid;
