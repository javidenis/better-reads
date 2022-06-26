const GET_GENRES = '/genres/get'

const actionGetGenres = genres => {
    return {
        type: GET_GENRES,
        genres
    }
}

export const getAllBusinesses = () => async dispatch => {
    const response = await fetch('/api/genres')
    const allGenres = await response.json()
    console.log(allGenres.genres)
    dispatch(actionGetGenres(allGenres.genres))
}


const genreReducer = (state={}, action) => {
    switch(action.type) {
        case GET_GENRES:
            console.log(action.genres)
            const newState = {}
            action.genres.forEach(genre => newState[genre.id] = genre)
            return newState
        default:
            return state
    }
}

export default genreReducer
