import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import './new-book.css'
import {addBookThunk} from '../../../store/books'
import Multiselect from "multiselect-react-dropdown";

const NewBook = () => {
    const sessionUser = useSelector((state) => state.session.user)
    const genres = Object.values(useSelector((state) => state.genres))
    const [title, setTitle] = useState('')
    const [books_genre, setBooks_genre] = useState([])
    const [author, setAuthor] = useState('')
    const [sub_heading, setSub_heading] = useState('')
    const [description, setDescription] = useState('')
    let [cover_url, setCover_url] = useState(null)
    const [publish_date, setPublish_date] = useState('')
    const [errors, setErrors] = useState([])
    const history = useHistory()
    const dispatch = useDispatch()


    const handleOnSubmit = async (e) => {
        e.preventDefault()

        if(cover_url && 
        !cover_url.name.endsWith("png") &&
        !cover_url.name.endsWith("jpg") &&
        !cover_url.name.endsWith( "pdf") &&
        !cover_url.name.endsWith("jpeg") &&
        !cover_url.name.endsWith("gif")
        ){
        setErrors(['File type not allowed'])
        return
      }


        if(!cover_url){
            cover_url = 'https://i.imgur.com/sJ3CT4V.gif'
        }

        const user_id = sessionUser.id

        const newBook = {
            title,
            author,
            sub_heading,
            description,
            cover_url,
            publish_date,
            user_id,
            books_genre
        }

        const data = await dispatch(addBookThunk(newBook))
        if (data) {
            setErrors(data)
        }else {
            history.push('/')
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

    return(
        <div id='book-creation-container'>
            <h1 id='book-creation-header'>Create a New Book</h1>
            <form id='book-form' onSubmit={e => handleOnSubmit(e)}>
                {errors.length > 0 && 
                    <ul>
                        <p id="book-creation-errors-header">Please fix the following errors:</p>
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
                <label>Select Genres:</label>
                <Multiselect
                    id="book-creation-multi"
                    options={genres}
                    onSelect={onSelect}
                    onRemove={onRemove}
                    displayValue="name"
                    showCheckbox={true}
                    placeholder={'Click Here to Select Genres'}
                />
                <div id="book-creation-buttons">
                <button id="book-form-submit" type="submit">Submit</button>
                <button id="book-form-submit" type="cancel" onClick={(e)=> {
                    e.preventDefault()
                    history.push('/home')
                    }}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default NewBook
