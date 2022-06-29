import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addBookshelfThunk } from '../../../store/bookshelves'

const NewBookshelf = () => {
	const sessionUser = useSelector((state) => state.session.user)
	const [name, setName] = useState('')
	const [errors, setErrors] = useState([])
	const dispatch = useDispatch()
	const history = useHistory()

	const handleOnSubmit = async (e) => {
		e.preventDefault()

		const user_id = sessionUser.id

		const newBookshelf = {
			name,
			user_id
		}

		const data = await dispatch(addBookshelfThunk(newBookshelf))
		if (data) {
			setErrors(data)
		} else {
			history.push('/')
		}
	}

	return (
		<div>
			<form onSubmit={e => handleOnSubmit(e)}>
				{errors.length > 0 &&
					<ul>
						{errors.map((error, idx) => <li key={idx}>{error}</li>)}
					</ul>
				}
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

export default NewBookshelf
