
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from "./components/NavBar/NavBar";
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import NewBook from './components/books/NewBook/NewBook'
import SingleBookDisplay from './components/books/SingleBookDisplay/SingleBookDisplay';
import { getAllGenres } from './store/genres';
import NewBookshelf from './components/bookshelves/NewBookshelf/NewBookshelf';
import { getAllBookshelvesThunk } from './store/bookshelves';
import { getAllBooksThunk } from './store/books';
import { getReviewsThunk } from './store/reviews';
import EditBook from './components/books/EditBook/editBook';
import BookshelfList from './components/bookshelves/BookshelfList/BookshelfList';
import EditBookshelf from './components/bookshelves/EditBookShelf/EditBookShelf';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      await dispatch(getAllBookshelvesThunk())
      await dispatch(getAllGenres())
      await dispatch(getAllBooksThunk())
      await dispatch(getReviewsThunk())

      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>

        <ProtectedRoute path='/users' exact={true} >

          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/bookshelves/new'>
          <NewBookshelf />
        </ProtectedRoute>
        <ProtectedRoute path='/bookshelves/all'>
          <BookshelfList />
        </ProtectedRoute>
        <ProtectedRoute path='/bookshelves/:id/edit'>
          <EditBookshelf />
        </ProtectedRoute>
        <ProtectedRoute path="/books/new" exact={true}>
          <NewBook />
        </ProtectedRoute>

        <Route exact path='/books/:id'>
          <SingleBookDisplay />
        </Route>
        <ProtectedRoute exact path='/books/:id/edit'>
          <EditBook />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >

          <h1>My Home Page</h1>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
