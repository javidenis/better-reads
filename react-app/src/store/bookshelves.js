const ADD_BOOKSHELF = '/bookshelf/add'
const GET_BOOKSHELVES = '/bookshelves/all'
const ADD_TO_BOOKSHELF = '/bookshelf/addBook'
const REMOVE_FROM_BOOKSHELF = 'bookshelf/removeBook'
const REMOVE_BOOKSHELF = '/bookshelf/remove'
const EDIT_BOOKSHELF = '/bookshelf/edit'

const actionAddBookshelf = bookshelf => {
	return {
		type: ADD_BOOKSHELF,
		bookshelf
	}
}

const actionGetAllBookshelves = bookshelves => {
	return {
		type: GET_BOOKSHELVES,
		bookshelves
	}
}

const actionAddBookToBookshelf = (book, bookshelf_id) => {
	return {
		type: ADD_TO_BOOKSHELF,
		payload: {
			book,
			bookshelf_id
		}
	}
}

const actionRemoveBookFromBookshelf = (bookshelf_id, book_id) => {
	return {
		type: REMOVE_FROM_BOOKSHELF,
		payload: {
			book_id,
			bookshelf_id
		}
	}
}

const actionRemoveBookshelf = bookshelf_id => {
	return {
		type: REMOVE_BOOKSHELF,
		bookshelf_id
	}
}

export const addBookshelfThunk = newBookshelf => async dispatch => {
	
	const {
		name,
		user_id
	} = newBookshelf

	const formData = new FormData()
	formData.append('name', name)
	formData.append('user_id', user_id)

	const response = await fetch('/api/bookshelves', {
		method: "POST",
		body: formData
	})

	const data = await response.json()
	if (response.ok) {
		dispatch(actionAddBookshelf(data))
		return null
	} else if (response.status < 500) {
		if (data.errors) {
			return data.errors
		}
	} else {
		return ['An error occurred. Please try again.']
	}
}

export const getAllBookshelvesThunk = () => async dispatch => {
	const response = await fetch('/api/bookshelves')
	const data = await response.json()
	if (response.ok) {
		dispatch(actionGetAllBookshelves(data))
	}
}

export const addBookToBookshelfThunk = ({bookshelf_id, user_id, book}) => async dispatch => {
	const formData = new FormData()
	formData.append('user_id', user_id)
	formData.append('bookshelf_id', bookshelf_id)
	formData.append('book_id', book.id)
	
	const response = await fetch(`/api/bookshelves/${bookshelf_id}`, {
		method: 'PUT',
		body: formData
	})
	const data = await response.json()
	if (response.ok) {
		dispatch(actionAddBookToBookshelf(book, bookshelf_id))
	}
}

export const removeBookFromBookshelfThunk = (bookshelf_id, book_id) => async dispatch => {
	const formData = new FormData()
	formData.append('bookshelf_id', bookshelf_id)
	formData.append('book_id', book_id)

	const response = await fetch(`/api/bookshelves/${bookshelf_id}/delete`, {
		method: 'PUT',
		body: formData
	})

	if (response.ok) {
		dispatch(actionRemoveBookFromBookshelf(bookshelf_id, book_id))
	}
}

export const removeBookshelfThunk = bookshelf_id => async dispatch => {
	const response = await fetch(`/api/bookshelves/${bookshelf_id}`, {
		method: 'DELETE'
	})

	if (response.ok) {
		dispatch(actionRemoveBookshelf(bookshelf_id))
	}
}

export const editBookshelfThunk = bookshelf => async dispatch => {
	console.log(bookshelf)
	const formData = new FormData()
	formData.append('name', bookshelf.name)
	formData.append('user_id', bookshelf.user_id)

	const response = await fetch(`/api/bookshelves/${bookshelf.id}/edit`, {
		method: 'PUT',
		body: formData
	})

	const data = await response.json()
	if (response.ok) {
		dispatch(actionAddBookshelf(data))
	} else if (response.status < 500) {
		if (data.errors) {
			return data.errors
		}
	} else {
		return ['An error occurred. Please try again.']
	}
}

const bookshelfReducer = (state={}, action) => {
	let newState = { ...state }
	switch(action.type) {
		case ADD_BOOKSHELF:
			newState = {...state, [action.bookshelf.id]: action.bookshelf}
			return newState
		case GET_BOOKSHELVES:
			action.bookshelves.bookshelves.forEach(bookshelf => {
				newState[bookshelf.id] = bookshelf
			})
			return newState
		case ADD_TO_BOOKSHELF:
			newState[action.payload.bookshelf_id].books[action.payload.book.id] = action.payload.book
			return newState
		case REMOVE_FROM_BOOKSHELF:
			delete newState[action.payload.bookshelf_id].books[action.payload.book_id]
			return newState
		case REMOVE_BOOKSHELF:
			delete newState[action.bookshelf_id]
			return newState
		default:
			return state
	}
}

export default bookshelfReducer
