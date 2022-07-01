import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory, useParams } from 'react-router-dom'
import { removeBookshelfThunk, addBookshelfThunk } from '../../../store/bookshelves'
import './bookshelflist.css'
import HomeBook from '../../homePage/homeBook'
import EditBookshelf from '../EditBookShelf/EditBookShelf'

const BookshelfList = () => {
	const { id } = useParams()
	const [name, setName] = useState('')
	const [booksToDisplay, setBooksToDisplay] = useState([])
	const dispatch = useDispatch()
	const history = useHistory()
	const books = Object.values(useSelector(state => state.books))
	const sessionUser = useSelector((state) => state.session.user)
	const bookshelves = Object.values(useSelector(state => state.bookshelves)).filter(bookshelf => bookshelf.user_id === sessionUser.id)
	const bookshelvesObj = useSelector(state => state.bookshelves)
	const readStatuses = useSelector(state => state.readStatus)
	const read = Object.values(useSelector(state => state.readStatus)).filter(status => status.user_id === sessionUser.id && status.readStatus === "Read").map(item => item.book_id)
	const currentlyReading = Object.values(useSelector(state => state.readStatus)).filter(status => status.user_id === sessionUser.id && status.readStatus === "Currently Reading").map(item => item.book_id)
	const wantToRead = Object.values(useSelector(state => state.readStatus)).filter(status => status.user_id === sessionUser.id && status.readStatus === "Want To Read").map(item => item.book_id)
	const [errors, setErrors] = useState([])

	const defaultShelves = ['all', 'read', 'current', 'want']

	if (!bookshelvesObj[id] && !defaultShelves.includes(id)) {
		history.push('/bookshelves/all')
	}

	// Get all book objects
	const allBooks = () => {
		let numBooks = [...books.filter(book => read.includes(book.id)), ...books.filter(book => currentlyReading.includes(book.id)), ...books.filter(book => wantToRead.includes(book.id))]
		// let numBooks = read + currentlyReading + wantToRead
		let bookIds = numBooks.map(book => book.id)

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
		if (bookshelvesObj[id] || defaultShelves.includes(id)) {
			if (id === 'all') {
				setBooksToDisplay(bookList)
			} else if (id === 'read') {
				setBooksToDisplay(books.filter(book => read.includes(book.id)))
			} else if (id === 'current') {
				setBooksToDisplay(books.filter(book => currentlyReading.includes(book.id)))
			} else if (id === 'want') {
				setBooksToDisplay(books.filter(book => wantToRead.includes(book.id)))
			} else {
				const thisBookshelf = Object.values(bookshelvesObj[Number(id)]?.books)
				setBooksToDisplay(thisBookshelf)
			}
		}
		//eslint-disable-next-line
	},[id, read] )


	const handleAddBookshelf = async (e) => {
		e.preventDefault()
		const user_id = sessionUser.id
		const newBookshelf = {
			name,
			user_id
		}
		const data = await dispatch(addBookshelfThunk(newBookshelf))
		if (data) {
            setErrors(data)
        }else {
			setName('')
			setErrors([])
		}
	}

	const removeBookshelf = async (bookshelf_id) => {
		await dispatch(removeBookshelfThunk(bookshelf_id))
		history.push('/bookshelves/all')
	}

	return (
		<div>
			<div id='bookshelf-display'>
				<div id='header-container'>
					<h1 id='bookshelf-header'>My Books: {defaultShelves.includes(id) ? id.charAt(0).toUpperCase() + id.slice(1) : bookshelvesObj[id]?.name}</h1>
				</div>
				<div id='br1'></div>
				<div id='bookshelf-main'>
					<div id='bookshelf-left-display'>
						<div id='bookshelves-left-header'>Bookshelves</div>
						<div id='bookshelves-list'>
							<Link id='bookshelf-link' to={'/bookshelves/all'}>All ({bookList.length})</Link>
							<Link id='bookshelf-link' to={'/bookshelves/read'}>Read ({read.length})</Link>
							<Link id='bookshelf-link' to={'/bookshelves/current'}>Currently Reading ({currentlyReading.length})</Link>
							<Link id='bookshelf-link' to={'/bookshelves/want'}>Want to Read ({wantToRead.length})</Link>
							<div id='br'></div>
							{Object.values(bookshelves).map(bookshelf => (
								<div key={bookshelf.id} id='link-div'>
									<Link id='bookshelf-link' to={`/bookshelves/${bookshelf.id}`}>{bookshelf.name} ({Object.values(bookshelf.books).length})</Link>
									<i onClick={() => removeBookshelf(bookshelf.id)} className="fa-solid fa-xmark"></i>
									<EditBookshelf bookshelf={bookshelf}></EditBookshelf>
								</div>
							))}
							<form id='bookshelf-form' onSubmit={e => handleAddBookshelf(e)}>
								{errors.length > 0 &&
									<ul>
										{errors.map((error, idx) => <li key={idx}>{error}</li>)}
									</ul>
								}
								<label>Add a Shelf: </label>
								<input
									name='name'
									value={name}
									onChange={e => setName(e.target.value)}
									type='text'
									required
								>
								</input>
								<button type='submit'>add</button>
							</form>
						</div>
					</div>
					<div id='bookshelf-book-display'>
						{booksToDisplay.length < 1 && <div id='bookshelf-display-no-books'>No Books to Display for Bookshelf { defaultShelves.includes(id) ? id.charAt(0).toUpperCase() + id.slice(1) : bookshelvesObj[id]?.name}</div>}
						{booksToDisplay.map(book => <HomeBook key={book.id} book={book} />)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default BookshelfList
