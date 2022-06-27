const ADD_BOOKSHELF = '/bookshelf/add'

const actionAddBookshelf = bookshelf => {
	return {
		type: ADD_BOOKSHELF,
		bookshelf
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


const bookshelfReducer = (state={}, action) => {
	switch(action.type) {
		case ADD_BOOKSHELF:
			let newAddState = {}
			newAddState = {...state, [action.bookshelf.id]: action.bookshelf}
			return newAddState
		default:
			return state
	}
}

export default bookshelfReducer
