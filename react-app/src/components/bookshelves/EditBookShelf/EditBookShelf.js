import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editBookshelfThunk } from '../../../store/bookshelves'

const EditBookshelf = () => {
	const bookshelf_id = useParams().id
	const sessionUser = useSelector((state) => state.session.user)
	const bookshelf = useSelector(state => state.bookshelves[bookshelf_id])
	const [name, setName] = useState(bookshelf.name || '')
	const [errors, setErrors] = useState([])
	const dispatch = useDispatch()
	const history = useHistory()


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
			history.push('/bookshelves/all')
		}
	}

	return (
		<div>{bookshelf.name}
			<form onSubmit={e => handleOnSubmit(e)}>
				<label>Bookshelf Name: </label>
				<input
					name='name'
					value={name}
					onChange={e => setName(e.target.value)}
					type='text'
					placeholder='Book Name Here'
				>
				</input>
				<button type='submit'>Submit</button>
			</form>
		</div>
	)
}

export default EditBookshelf