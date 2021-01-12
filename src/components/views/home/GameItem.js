import React from 'react'; 
import { Link } from "react-router-dom";
import {PropTypes} from "prop-types";
import FavButton from '../../../utils/FavButton';

const GameItem = ({title, image, rating, release, id}) => {
 
    return (
        <div className="card card--hover" key={id}>
            <img src={image} className="card__img" alt="game" /> 
            <FavButton
                id={id}
                title={title}
                image={image} 
                rating={rating} 
                release={release} 
                
                />
            <div className="card__body">
                <h5 className="card__title">{title}</h5>
                <p className="card__text"><span className="card__span">Rating:</span>{rating}</p>
                <p className="card__text"><span className="card__span">Released:</span>{release}</p>
                <Link to={"GameDetails/" + id}>
                    <button className="card__btn card__btn--hover">Click here for more details</button>
                </Link>
            </div>
        </div>
    );
}

GameItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    release: PropTypes.number.isRequired
   
}

export default GameItem;