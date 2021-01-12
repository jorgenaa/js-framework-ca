import React from 'react';
import { PropTypes } from 'prop-types';

const GenresAndPlatforms = ({genres, platforms}) => {
  
    return (
        <>
            <p className="game-details__genre"><span className="game-details__genre-span">Genre:</span>{genres[0].name}</p>
            <br />
            <h3 className="game-details__platforms-title">Platforms</h3>
            <ul>
                {platforms.map(platform => {
                    return (
                        <li className="game-details__platforms-list">{platform.platform.name}</li>
                    );
                })}
            </ul>
        </>
    )
}

GenresAndPlatforms.propTypes = {
    genres: PropTypes.string.isRequired,
    platforms: PropTypes.string.isRequired
};

export default GenresAndPlatforms;
