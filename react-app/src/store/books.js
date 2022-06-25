const ADD_BOOK = '/book/add'

const actionAddBook = book => {
    return {
        type: ADD_BOOK,
        book
    }
}

export const addBookThunk = newBook => async dispatch => {


    const {
        title,
        author,
        sub_heading,
        description,
        cover_url,
        publish_date,
        user_id
    } = newBook
    
    const formData = new FormData();
    formData.append('title', title)
    formData.append('author', author)
    formData.append('sub_heading', sub_heading)
    formData.append('description', description)
    formData.append('cover_url', cover_url)
    formData.append('publish_date', publish_date)
    formData.append('user_id', user_id)


    const response = await fetch('/api/books', {
        method: "POST",
        body: formData
    })

    const data = await response.json()
    if (response.ok){
        dispatch(actionAddBook(data))
        return null
    } else if (response.status < 500){
        if (data.errors) {
            return data.errors;
          }
    } else {
        return ['An error occurred. Please try again.']
    }
    
}


const bookReducer = (state={}, action) => {
    switch(action.type) {
        case ADD_BOOK:
            let newAddState = {}
            newAddState = {...state, [action.book.id]: action.book}
            return newAddState
        default:
             return state
    }
}

export default bookReducer
