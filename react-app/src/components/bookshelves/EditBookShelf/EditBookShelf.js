import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editBookshelfThunk } from '../../../store/bookshelves'
import './editbookshelf.css'

const EditBookshelf = ({ bookshelf }) => {
	const bookshelf_id = useParams().id
	const sessionUser = useSelector((state) => state.session.user)
	// const bookshelf = useSelector(state => state.bookshelves[bookshelf_id])
	const [name, setName] = useState(bookshelf.name || '')
	const [errors, setErrors] = useState([])
	const [openForm, setOpenForm] = useState(false)
	const dispatch = useDispatch()
	const history = useHistory()

	const handleClose = e => {
		e.preventDefault()
		setOpenForm(false)
	}

	const handleOnSubmit = async (e) => {
		e.preventDefault()

		const payload = {
			id: bookshelf.id,
			name: name,
			user_id: sessionUser.id
		}

		const data = await dispatch(editBookshelfThunk(payload))
		if (data) {
			setErrors(data)
		} else {
			setOpenForm(false)
		}
	}

	return (
		<div id='edit-container'>
			{sessionUser && !openForm && <button id='edit-button' onClick={() => setOpenForm(!openForm)}>Edit</button>}
			{openForm && (
				<form onSubmit={e => handleOnSubmit(e)}>
					{errors.length > 0 &&
						<ul>
							{errors.map((error, idx) => <li key={idx}>{error}</li>)}
						</ul>
					}
					<input
						name='name'
						value={name}
						onChange={e => setName(e.target.value)}
						type='text'
						required
						id='edit-bookshelf'
					>
					</input>
					<button id='edit-button' type='submit'>Edit</button>
					<button id='edit-button' onClick={e => handleClose(e)}>Cancel</button>
				</form>
			)}
		</div>
	)
}

export default EditBookshelf
