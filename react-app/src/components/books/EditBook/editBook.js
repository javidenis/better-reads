import React, { useEffect, useState } from "react";
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import './edit-book.css'
import {editBookThunk, deleteBookThunk} from '../../../store/books'
import Multiselect from "multiselect-react-dropdown";

const EditBook = () => {
    const bookId = useParams().id
    const thisBook = useSelector(state => state.books)[bookId]
    const sessionUser = useSelector((state) => state.session.user)
    const genres = Object.values(useSelector((state) => state.genres))
    const [title, setTitle] = useState(thisBook.title || '')
    const [books_genre, setBooks_genre] = useState([])
    const [author, setAuthor] = useState(thisBook.author || '')
    const [sub_heading, setSub_heading] = useState(thisBook.sub_heading || '')
    const [description, setDescription] = useState(thisBook.description || '')
    let [cover_url, setCover_url] = useState(null)
    const [publish_date, setPublish_date] = useState(thisBook.publish_date || '')
    const [errors, setErrors] = useState([])
    const history = useHistory()
    const dispatch = useDispatch()
    const [deleteDisplay, setDeleteDisplay] = useState(false)

    useEffect(()=> {
        if (thisBook.user_id !== sessionUser.id){
            history.push('/')
        }
    },[history, sessionUser.id, thisBook.user_id])


    const handleOnSubmit = async (e) => {
        e.preventDefault()

        if(!cover_url){
            cover_url = 'https://i.imgur.com/sJ3CT4V.gif'
        }

        const user_id = sessionUser.id

        const newBook = {
            bookId,
            title,
            author,
            sub_heading,
            description,
            cover_url,
            publish_date,
            user_id,
            books_genre
        }

        const data = await dispatch(editBookThunk(newBook))
        if (data) {
            setErrors(data)
        }else {
            history.push(`books/${bookId}`)
        }

    }
    const updateImage = (e) => {
        const file = e.target.files[0];
        setCover_url(file);
    }

    const onSelect = (selectedList, selectedItem) => {
        const idList = selectedList.map(item => item.id)
        setBooks_genre(idList)
    }
    const onRemove = (selectedList, selectedItem) => {
        const idList = selectedList.map(item => item.id)
        setBooks_genre(idList)
    }

    const handleCancel = () => {

        history.push(`/books/${bookId}`)
    }

    const handleDelete = async () => {
        const data = dispatch(deleteBookThunk(bookId))
        history.push('/')
    }

    return(
        <div id='book-creation-container'>
            <h1 id='book-creation-header'>Edit {thisBook.title}</h1>
            <form id='book-form' onSubmit={e => handleOnSubmit(e)}>
                {errors.length > 0 && 
                    <ul>
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                }
                <label>Book Title:</label>
                <input
                    name='title'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type='text'
                    placeholder="Book Title Here"
                >
                </input>
                <label>Book Author:</label>
                <input
                    name='author'
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                    type='text'
                    placeholder="Book Author Here"
                >
                </input>
                <label>Book Sub-heading:</label>
                <textarea
                    rows={5}
                    cols={25}
                    name='subheading'
                    value={sub_heading}
                    onChange={e => setSub_heading(e.target.value)}
                    type='text'
                    placeholder="Book Sub-heading Here"
                >
                </textarea>
                <label>Book Description:</label>
                <textarea
                    rows={10}
                    cols={25}
                    name='description'
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    type='text'
                    placeholder="Book Description Here"
                >
                </textarea>
                <label>Book Image:</label>
                <input
                    name='cover_url'
                    accept="image/*"
                    onChange={updateImage}
                    type='file'
                    placeholder="Cover Url Here"
                >
                </input>
                <label>Book Publish Date:</label>
                <input
                    name='publishDate'
                    value={publish_date}
                    onChange={e => setPublish_date(e.target.value)}
                    type='date'
                    placeholder="Publish Date Here"
                >
                </input>
                <label>Genres:</label>
                <Multiselect
                    options={genres}
                    onSelect={onSelect}
                    onRemove={onRemove}
                    displayValue="name"
                    showCheckbox={true}
                />
                <button id="book-form-submit" type="submit">Submit</button>
                <button id="book-form-submit" onClick={()=> handleCancel()}>Cancel</button>
                <button id="book-form-submit" onClick={(e) => {
                    e.preventDefault()
                    setDeleteDisplay(!deleteDisplay)
                    }}>Delete</button>
            </form>
                {deleteDisplay && 
                <div>
                    <p>Are you sure you want to delete this Book?</p>
                    <button onClick={()=> handleDelete()}>Confirm Delete</button>
                    <button onClick={() => setDeleteDisplay(!deleteDisplay)}>Cancel Delete</button>
                </div>
                
                }
        </div>
    )
}

export default EditBook
