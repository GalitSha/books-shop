import {FETCH_BOOKS, SHOW_DELETE_MESSAGE, SHOW_MODAL} from "../constants/action-types";
import {SUBMIT_CHANGES} from "../constants/action-types";
import {DELETE_BOOK} from "../constants/action-types";

export const fetchBooks = (data) => ({type: FETCH_BOOKS, data: data});
export const showModal = value => ({type: SHOW_MODAL, value:value});
export const submitChanges = (id, date, authorName) => ({type: SUBMIT_CHANGES,
                                                     date:date,
                                                     authorName:authorName, id: id});

export const changeDeleteState = (value) => ({type: SHOW_DELETE_MESSAGE, value: value});
export const deleteBook = (id) => ({type: DELETE_BOOK, id: id});