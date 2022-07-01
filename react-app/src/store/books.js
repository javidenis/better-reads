import { getAllBookshelvesThunk } from "./bookshelves"
import { getReadStatusThunk } from "./readstatus"

const ADD_BOOK = '/book/add'
const GET_BOOKS = '/books/all'
const DELETE_BOOK = '/books/delete'

const actionAddBook = book => {
    return {
        type: ADD_BOOK,
        book
    }
}

const actionAllBook = books => {
    return {
        type: GET_BOOKS,
        books
    }
}

const actionDeleteBook = bookId => {
    return {
        type: DELETE_BOOK,
        bookId
    }
}

export const getAllBooksThunk = () => async dispatch => {
    const response = await fetch('/api/books')
    const data = await response.json()
    if (response.ok) {
        dispatch(actionAllBook(data))
    }
}

export const deleteBookThunk = bookId => async dispatch => {
    const response = await fetch(`/api/books/${bookId}`, {
        method: 'DELETE'
    })
    if (response.ok) {
        await dispatch(actionDeleteBook(bookId))
        await dispatch(getReadStatusThunk())
        await dispatch(getAllBookshelvesThunk())
        return 'Success'
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
        user_id,
        books_genre
    } = newBook

    const formData = new FormData();
    formData.append('title', title)
    formData.append('author', author)
    formData.append('sub_heading', sub_heading)
    formData.append('description', description)
    formData.append('publish_date', publish_date)
    formData.append('user_id', user_id)
    formData.append('books_genre', books_genre)
    formData.append('cover_url', cover_url)


    const response = await fetch('/api/books', {
        method: "POST",
        body: formData
    })

    const data = await response.json()
    if (response.ok) {
        dispatch(actionAddBook(data))
        return null
    } else if (response.status < 500) {
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.']
    }

}


export const editBookThunk = editBook => async dispatch => {
    const {
        bookId,
        title,
        author,
        sub_heading,
        description,
        cover_url,
        publish_date,
        user_id,
        books_genre
    } = editBook

    const formData = new FormData();
    formData.append('title', title)
    formData.append('author', author)
    formData.append('sub_heading', sub_heading)
    formData.append('description', description)
    formData.append('publish_date', publish_date)
    formData.append('user_id', user_id)
    formData.append('books_genre', books_genre)
    formData.append('cover_url', cover_url)

    const response = await fetch(`/api/books/${bookId}`, {
        method: "PUT",
        body: formData
    })

    const data = await response.json()
    if (response.ok) {
        dispatch(actionAddBook(data))
        return null
    } else if (response.status < 500) {
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.']
    }

}


const bookReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_BOOK:
            let newAddState = {}
            newAddState = { ...state, [action.book.id]: action.book }
            return newAddState
        case GET_BOOKS:
            let newState = { ...state };
            action.books.books.forEach((book) => {
                newState[book.id] = book;
            });
            return newState;
        case DELETE_BOOK:
            let newDeleteState = {...state}
            delete newDeleteState[action.bookId]
            return newDeleteState
        default:
            return state
    }
}

export default bookReducer
