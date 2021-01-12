import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../constants/api";
import GenresAndPlatforms from './GenresAndPlatforms';

const GameDetails = () => {
    const [detail, setDetail] = useState([]);
    const [loading, setLoading] = useState(true);

    let { id } = useParams();
  
    const url = BASE_URL + "/" + id;

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => {
                setDetail(json)
               
            }) 
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [url]);

    if (loading) {
		return <p>Loading...</p>;
	}

    return (
            <main className="game-details" key={detail.id}>
                <h2 className="game-details__heading">{detail.name}</h2>
                <article className="game-details__sections">
                    <img className="game-details__img" src={detail.background_image} alt="game" /> 
                    <p className="game-details__text">{detail.description_raw}</p>
                    <a className="game-details__link game-details__link--hover" href={detail.website}> Click here to vist the {detail.name}`s official website</a>
            
                    <GenresAndPlatforms  
                        genres={detail.genres}
                        platforms={detail.platforms} />
                </article>
            </main>
    );
}

export default GameDetails
