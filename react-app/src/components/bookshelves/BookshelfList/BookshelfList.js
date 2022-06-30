import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { removeBookFromBookshelfThunk, removeBookshelfThunk, addBookshelfThunk } from '../../../store/bookshelves'
import './bookshelflist.css'
import HomeBook from '../../homePage/homeBook'

const BookshelfList = () => {
	const { id } = useParams()
	const [currentBookshelf, setCurrentBookshelf] = useState(id ? id : 'all')
	const [name, setName] = useState('')
	const [booksToDisplay, setBooksToDisplay] = useState([])
	const dispatch = useDispatch()
	const books = Object.values(useSelector(state => state.books))
	const sessionUser = useSelector((state) => state.session.user)
	const bookshelves = Object.values(useSelector(state => state.bookshelves)).filter(bookshelf => bookshelf.user_id === sessionUser.id)
	const read = Object.values(useSelector(state => state.readStatus)).filter(status => status.user_id === sessionUser.id && status.readStatus === "Read").map(item => item.book_id)
	const currentlyReading = Object.values(useSelector(state => state.readStatus)).filter(status => status.user_id === sessionUser.id && status.readStatus === "Currently Reading").map(item => item.book_id)
	const wantToRead = Object.values(useSelector(state => state.readStatus)).filter(status => status.user_id === sessionUser.id && status.readStatus === "Want To Read").map(item => item.book_id)

	// Get all book objects
	const allBooks = () => {
		let numBooks = [...books.filter(book => read.includes(book.id)), ...books.filter(book => currentlyReading.includes(book.id)), ...books.filter(book => wantToRead.includes(book.id))]
		// let numBooks = read + currentlyReading + wantToRead
		let bookIds = numBooks.map(book => book.id)
		// console.log(bookIds)
		for (let bookshelf of bookshelves) {
			// numBooks += Object.values(bookshelf.books)
			Object.values(bookshelf.books).forEach(book => {
				if (!bookIds.includes(book.id)) {
					numBooks.push(book)
					bookIds.push(book.id)
				}
			})
		}

		return numBooks
	}

	const bookList = allBooks()

	useEffect(() => {
		const displayBooks = () => {
			if (currentBookshelf === 'all') {
				setBooksToDisplay(bookList)
			} else if (currentBookshelf === 'read') {
				setBooksToDisplay(books.filter(book => read.includes(book.id) ))
			} else if (currentBookshelf === 'current') {
				setBooksToDisplay(books.filter(book => currentlyReading.includes(book.id)))
			} else if (currentBookshelf === 'want') {
				setBooksToDisplay(books.filter(book => wantToRead.includes(book.id)))
			} else {
				setBooksToDisplay(books.filter(book => Object.values(bookshelves[currentBookshelf].books).includes(book.id)))
			}
		}
	}, [])


	// const display = displayBooks()
	// console.log(display)

	const handleAddBookshelf = async (e) => {
		e.preventDefault()

		const user_id = sessionUser.id

		const newBookshelf = {
			name,
			user_id
		}

		await dispatch(addBookshelfThunk(newBookshelf))
		setName('')
	}

	const removeBook = async (bookshelf_id, book_id) => {

		await dispatch(removeBookFromBookshelfThunk(bookshelf_id, book_id))
	}

	const removeBookshelf = async (bookshelf_id) => {
		await dispatch(removeBookshelfThunk(bookshelf_id))
	}

	return (
		<div>
			<div id='bookshelf-display'>
				<h1 id='bookshelf-header'>My Books:</h1>
				<div id='bookshelf-main'>
					<div id='bookshelf-left-display'>
						<div id='bookshelves-left-header'>Bookshelves</div>
						<div id='bookshelves-list'>
							<Link id='bookshelf-link' to={'/bookshelves/all/all'}>All ({bookList.length})</Link>
							<Link id='bookshelf-link' to={'/bookshelves/all/read'}>Read ({read.length})</Link>
							<Link id='bookshelf-link' to={'/bookshelves/all/current'}>Currently Reading ({currentlyReading.length})</Link>
							<Link id='bookshelf-link' to={'/bookshelves/all/want'}>Want to Read ({wantToRead.length})</Link>
							<div id='br'></div>
							{Object.values(bookshelves).map(bookshelf => (
								<Link key={bookshelf.id} id='bookshelf-link' to={`/bookshelves/${bookshelf.id}`}>{bookshelf.name} ({Object.values(bookshelf.books).length})</Link>						
							))}
							<form id='bookshelf-form' onSubmit={e => handleAddBookshelf(e)}>
								{/* {errors.length > 0 &&
									<ul>
										{errors.map((error, idx) => <li key={idx}>{error}</li>)}
									</ul>
								} */}
								<label>Add a Shelf: </label>
								<input
									name='name'
									value={name}
									onChange={e => setName(e.target.value)}
									type='text'
								>
								</input>
								<button type='submit'>Submit</button>
							</form>
						</div>
					</div>
					<div id='bookshelf-book-display'>
						{booksToDisplay.map(book => <HomeBook key={book.id} book={book} />)}
					</div>
				</div>
			</div>
			{/* {Object.values(bookshelves).map(bookshelf => (
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
			))} */}
		</div>
	)
}

export default BookshelfList
