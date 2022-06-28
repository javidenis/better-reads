import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addReadStatusThunk } from '../../store/readstatus'

function ReadStatus({ thisBook }) {
    const sessionUser = useSelector((state) => state.session.user)
    const [status, setStatus] = useState('Choose Read Status')
    const dispatch = useDispatch()


    const handleReadStatus = (e) => {
        setStatus(e.target.value)
        const newReadStatus = {
            user_id: sessionUser.id,
            book_id: thisBook.id,
            readStatus: e.target.value
        }
        dispatch(addReadStatusThunk(newReadStatus))

    }

    return (
        <div>
            <select value={status} onChange={(e) => handleReadStatus(e)}>
                <option disabled>Choose Read Status</option>
                <option>Want To Read</option>
                <option>Currently Reading</option>
                <option>Read</option>
            </select>
        </div>
    )
}

export default ReadStatus