import {SHOW_DELETE_MESSAGE, DELETE_BOOK, SHOW_MODAL, FETCH_BOOKS} from "../constants/action-types";
import {SUBMIT_CHANGES} from "../constants/action-types";


const initialState = {
  books: [],
  showDetailsModal: false,
  deleteCurrentBook: false
};


export const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_BOOKS:
      return {...state, books: action.data};

    case SHOW_MODAL:
      return {...state, showDetailsModal: action.value};

    case SUBMIT_CHANGES:
      let newBooks = state.books.map((book) => {
        if (book.id === action.id) {
          book.volumeInfo.authors = [action.authorName];
          book.volumeInfo.publishedDate = action.date;
        }
        return book;
      });
      return {...state, books: newBooks};

    case SHOW_DELETE_MESSAGE:
      return {...state, deleteCurrentBook: action.value};

    case DELETE_BOOK:
      let newBooks2 = state.books.filter(book => book.id !== action.id);
      return {...state, books: newBooks2};


    default:
      return state;
  }
};




// {
//   title: "book1",
//     id: 100,
//   authorName: "Dugalit",
//   url: 'http://southlandbooksandcafe.com/files/images/category-BOOKS.jpg',
//   publishDate: "20.7.08"
// },
// {
//   title: "book2",
//     id: 200,
//   authorName: "Dugalit",
//   url: 'http://southlandbooksandcafe.com/files/images/category-BOOKS.jpg',
//   publishDate: "20.7.08"
// },
// {
//   title: "book3",
//     id: 300,
//   authorName: "Dugalit",
//   url: 'http://southlandbooksandcafe.com/files/images/category-BOOKS.jpg',
//   publishDate: "20.7.08"
// },
// {
//   title: "book4",
//     id: 400,
//   authorName: "Dugalit",
//   url: 'http://southlandbooksandcafe.com/files/images/category-BOOKS.jpg',
//   publishDate: "20.7.08"
// },
// {
//   title: "book5",
//     id: 500,
//   authorName: "Dugalit",
//   url: 'http://southlandbooksandcafe.com/files/images/category-BOOKS.jpg',
//   publishDate: "20.7.08"
// },
// {
//   title: "book6",
//     id: 600,
//   authorName: "Dugalit",
//   url: 'http://southlandbooksandcafe.com/files/images/category-BOOKS.jpg',
//   publishDate: "20.7.08"
// },
// {
//   title: "book7",
//     id: 700,
//   authorName: "Dugalit",
//   url: 'http://southlandbooksandcafe.com/files/images/category-BOOKS.jpg',
//   publishDate: "20.7.08"
// },
// {
//   title: "book8",
//     id: 800,
//   authorName: "Dugalit",
//   url: 'http://southlandbooksandcafe.com/files/images/category-BOOKS.jpg',
//   publishDate: "20.7.08"
// },
// {
//   title: "book9",
//     id: 900,
//   authorName: "Dugalit",
//   url: 'http://southlandbooksandcafe.com/files/images/category-BOOKS.jpg',
//   publishDate: "20.7.08"
// },
// {
//   title: "book10",
//     id: 110,
//   authorName: "Dugalitt",
//   url: 'http://southlandbooksandcafe.com/files/images/category-BOOKS.jpg',
//   publishDate: "20.7.08"
// }