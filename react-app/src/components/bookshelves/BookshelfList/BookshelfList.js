import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeBookFromBookshelfThunk, removeBookshelfThunk } from '../../../store/bookshelves'

const BookshelfList = () => {
	const sessionUser = useSelector((state) => state.session.user)
	const bookshelves = Object.values(useSelector(state => state.bookshelves)).filter(bookshelf => bookshelf.user_id === sessionUser.id)
	const dispatch = useDispatch()
	// console.log(bookshelves[0].books)

	const removeBook = async (bookshelf_id, book_id) => {
		// console.log(bookshelf_id, book_id)

		const data = await dispatch(removeBookFromBookshelfThunk(bookshelf_id, book_id))
	}

	const removeBookshelf = async (bookshelf_id) => {
		const data = await dispatch(removeBookshelfThunk(bookshelf_id))
	}

	return (
		<div>
			{Object.values(bookshelves).map(bookshelf => (
				<div>
					<div key={bookshelf.id}>{bookshelf.name}
						<button onClick={e => removeBookshelf(bookshelf.id)}>Delete Bookshelf</button>
					</div>
						{Object.values(bookshelf.books).map(book => (
							<div key={book.id}>{book.title}
								<button onClick={e =>removeBook(bookshelf.id, book.id)}>Remove</button>
							</div>
						))}
				</div>
			))}
		</div>
	)
}

export default BookshelfList