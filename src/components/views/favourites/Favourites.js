import React from "react";
import { getExisitngFavorits } from "../../../utils/favFunction";
import { FaHeart } from "react-icons/fa";

const Favourites = () => {
    const favourites = getExisitngFavorits();
       
    return (
        <div className="game-list game-list__margin-top">
            {favourites.length === 0 ? <p className="game-list__message">No favourites yet</p> : ""}
            {favourites.map(favourite => {
                const { title, image, rating, released, id } = favourite;
               
                return (
                    <>
                    <div className="card card--hover" key={id}>
                        <img src={image} className="card__img" alt="game" /> 
                        <FaHeart
                            id={id}
                            className={"card__favourite card__favourite--selected"} 
                        />
                        <div className="card__body">
                            <h5 className="card__title">{title}</h5>
                            <p className="card__text"><span className="card__span">Rating:</span>{rating}</p>
                            <p className="card__text"><span className="card__span">Released:</span>{released}</p>
                        </div>
                    </div>
                    </>
                )
            })}
        </div>
    )
}

export default Favourites;
