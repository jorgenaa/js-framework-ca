import React, {useState} from 'react'; 
import { PropTypes } from 'prop-types';
import { FaHeart } from 'react-icons/fa';
import { getExisitngFavorits } from './favFunction';

const FavButton = ({id, image, title, rating, release}) => {
    const [toggle, setToggle] = useState(false);
    const localStorageKey = 'favourite';
    let cssClass = "card__favourite card__favourite--unselected";
    const favourites = getExisitngFavorits();
  
    //Check through favs array
    //does the game id exist in the favs array
    function checkDoexObekctExist(){
        const doesObjectExist = favourites.find(fav => {
            return fav.id === id;
        })
        if(doesObjectExist) {
            cssClass= "card__favourite card__favourite--selected"
        }
        console.log(doesObjectExist)
    }
    checkDoexObekctExist();

    

    function saveFavorites(favorite) {
        localStorage.setItem(localStorageKey, JSON.stringify(favorite));
    }
     
     const handleToggle = () => {
        setToggle((toggle) => !toggle)
      
        const currentFavorites = getExisitngFavorits();
       
        const gameExist = currentFavorites.find(fav => {
            return fav.id === id
        })
        if(gameExist === undefined) {
            const game= {"title": title, "image": image, "rating": rating, "released": release, "id": id};
            currentFavorites.push(game);
            saveFavorites(currentFavorites);
        }else {
            const newFavs = currentFavorites.filter(fav => {
                return fav.id !== id
                })
                saveFavorites(newFavs);
          }
      }
   
    return <FaHeart
                title="Add to favourite" 
                onClick={handleToggle}
                className={cssClass} 
                toggle={toggle}
            />
}

FavButton.propTypes = {
    toggle: PropTypes.bool.isRequired,
    setToggle: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired
}

export default FavButton;