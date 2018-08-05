import {DELETE_BOOK, SHOW_MODAL} from "../constants/action-types";
import {SUBMIT_CHANGES} from "../constants/action-types";


const initialState = {
  books: [
    {
      title: "book1",
      id: 100,
      authorName: "Dugalit",
      url: 'http://southlandbooksandcafe.com/files/images/category-BOOKS.jpg',
      publishDate: "20.7.08"
    },
    {
      title: "book2",
      id: 200,
      authorName: "Dugalit",
      url: 'http://southlandbooksandcafe.com/files/images/category-BOOKS.jpg',
      publishDate: "20.7.08"
    },
    {
      title: "book3",
      id: 300,
      authorName: "Dugalit",
      url: 'http://southlandbooksandcafe.com/files/images/category-BOOKS.jpg',
      publishDate: "20.7.08"
    },
    {
      title: "book4",
      id: 400,
      authorName: "Dugalit",
      url: 'http://southlandbooksandcafe.com/files/images/category-BOOKS.jpg',
      publishDate: "20.7.08"
    },
    {
      title: "book5",
      id: 500,
      authorName: "Dugalit",
      url: 'http://southlandbooksandcafe.com/files/images/category-BOOKS.jpg',
      publishDate: "20.7.08"
    },
    {
      title: "book6",
      id: 600,
      authorName: "Dugalit",
      url: 'http://southlandbooksandcafe.com/files/images/category-BOOKS.jpg',
      publishDate: "20.7.08"
    },
    {
      title: "book7",
      id: 700,
      authorName: "Dugalit",
      url: 'http://southlandbooksandcafe.com/files/images/category-BOOKS.jpg',
      publishDate: "20.7.08"
    },
    {
      title: "book8",
      id: 800,
      authorName: "Dugalit",
      url: 'http://southlandbooksandcafe.com/files/images/category-BOOKS.jpg',
      publishDate: "20.7.08"
    },
    {
      title: "book9",
      id: 900,
      authorName: "Dugalit",
      url: 'http://southlandbooksandcafe.com/files/images/category-BOOKS.jpg',
      publishDate: "20.7.08"
    },
    {
      title: "book10",
      id: 110,
      authorName: "Dugalitt",
      url: 'http://southlandbooksandcafe.com/files/images/category-BOOKS.jpg',
      publishDate: "20.7.08"
    }
  ],
  showDetailsModal: false
};


export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {...state, showDetailsModal: action.value};


    case SUBMIT_CHANGES:
      let newBooks = state.books.map((book) => {
        if (book.id === action.id) {
          book.authorName = action.authorName;
          book.publishDate = action.date;
        }
        return book;
      });
      return {...state, books: newBooks};

    case DELETE_BOOK:
      let newBooks2 = state.books.filter(book => book.id !== action.id )
      return {...state, books: newBooks2};


    default:
      return state;
  }
};





function onlyCharacters (str) {
  let  charactersArr = str.split(" ");


  console.log(charactersArr);
}


.filter(char => char.length === 1 && char.match(/[A-Z|a-z]/i));