export const FETCH_GAMES_PENDING = 'FETCH_GAMES_PENDING';
export const FETCH_GAMES_SUCCESS = 'FETCH_GAMES_SUCCESS';
export const FETCH_GAMES_ERROR = 'FETCH_GAMES_ERROR';

export function fetchGamesPending() {
    return {
        type: FETCH_GAMES_PENDING
    }
}

export function fetchGamesSuccess(games) {
    return {
        type: FETCH_GAMES_SUCCESS,
        games: games
    }
}

 export function fetchGamesError(error) {
    return {
        type: FETCH_GAMES_ERROR,
        error: error
    }
}