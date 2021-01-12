import {fetchGamesPending, fetchGamesSuccess, fetchGamesError} from './action';
import {BASE_URL} from '../constants/api';

function fetchGames() {
    return dispatch => {
        dispatch(fetchGamesPending());
        fetch(BASE_URL)
        .then(res => res.json())
        .then(res => {
            console.log(res.results);
        })
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchGamesSuccess(res));
            return res;
        })
        .catch(error => {
            dispatch(fetchGamesError(error));
        })
    }
}

export default fetchGames;