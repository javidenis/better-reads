import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import './new-book.css'
import {addBookThunk} from '../../../store/books'

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

    useEffect(()=> {
        console.log(books_genre)
    },[books_genre])

    const handleOnSubmit = async (e) => {
        e.preventDefault()

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

    return(
        <div id='book-creation-container'>
            <h1 id='book-creation-header'>Create a New Book</h1>
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
                <label>Genres (hold CTRL to select more than one):</label>
                <select
                    value={books_genre}
                    onChange={e => setBooks_genre(e.target.value)}
                    multiple>
                        {genres.map(genre => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
                </select>
                <button id="book-form-submit" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewBook
