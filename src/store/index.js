import { configureStore } from '@reduxjs/toolkit';
import auth from './authSlice';
import books from './BookSlice';


export default configureStore({ reducer: { books, auth } });
