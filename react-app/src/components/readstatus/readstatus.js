import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addReadStatusThunk } from '../../store/readstatus'
import './read-status.css'

function ReadStatus({ thisBook }) {
    const sessionUser = useSelector((state) => state.session.user)
    const dispatch = useDispatch()
    const [dropDownOpen, setDropDownOpen] = useState(false)
    const readStatus = Object.values(useSelector(state => state.readStatus))
    const [currentStatus, setCurrentStatus] = useState("Choose Read Status")

    useEffect(() => {
        const found = readStatus.find(status => status.user_id === sessionUser.id && status.book_id === thisBook.id)
        if (found) setCurrentStatus(found.readStatus)

    }, [currentStatus, setCurrentStatus, readStatus, sessionUser.id, thisBook.id])

    useEffect(() => {
        const closeDropdown = e => {
            if (e.path[1].className !== 'dont-close1' && e.path[1].className !== 'dont-close1' && e.path[0].className !== 'fa-solid fa-caret-down dont-close1' && e.path[0].className !== 'dont-close1') {
                setDropDownOpen(false)
            }
        }

        document.body.addEventListener('click', closeDropdown)

        return () => document.body.removeEventListener('click', closeDropdown)
    }, [])

    const handleReadStatus = (e) => {
        const newReadStatus = {
            user_id: sessionUser.id,
            book_id: thisBook.id,
            readStatus: e.target.value
        }
        setDropDownOpen(false)
        dispatch(addReadStatusThunk(newReadStatus))
    }


    const handleDropDownClick = (e) => {
        setDropDownOpen(!dropDownOpen)
    }


    return (
        <>
            <div id='read-status-main' className='dont-close1'>
                <div id='read-status-button-container'>
                    <div id='read-status-current'>{currentStatus}</div>
                    <div id='read-status-button' className='dont-close1' onClick={(e) => handleDropDownClick(e)}><i className="fa-solid fa-caret-down dont-close1"></i></div>
                </div>

                {dropDownOpen && 
                <div>
                    <div id='read-status-select' className='dont-close1'>
                        <option onClick={(e) => handleReadStatus(e)}>Want To Read</option>
                        <option onClick={(e) => handleReadStatus(e)}>Currently Reading</option>
                        <option onClick={(e) => handleReadStatus(e)}>Read</option>
                    </div>
                </div>
                }
            </div>
        </>
    )
}

export default ReadStatus
