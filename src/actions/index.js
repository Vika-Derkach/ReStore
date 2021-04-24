const booksRequested = () => {
  return {
    type: "FETCH_BOOKS_REQUEST",
  };
};
const booksLoaded = (newBooks) => {
  return {
    type: "FETCH_BOOKS_SUCCESS",
    payload: newBooks,
  };
};

const booksError = (error) => {
  return {
    type: "FETCH_BOOKS_FAILURE",
    payload: error,
  };
};
export const bookAddedToCart = (booksId) => {
  return {
    type: "BOOK_ADDED_TO_CART",
    payload: booksId,
  };
};
export const bookRemovedFromCart = (booksId) => {
  return {
    type: "BOOK_REMOVE_FROM_CART",
    payload: booksId,
  };
};
export const allBookRemovedFromCart = (booksId) => {
  return {
    type: "ALL_BOOK_REMOVE_FROM_CART",
    payload: booksId,
  };
};
// export const onDelete = (arrId) => {
//   return {
//     type: "BOOK_DELETED_FROM_CART",
//     payload: arrId,
//   };
// };
// export const onIncrease = (arrIncreaseId) => {
//   return {
//     type: "BOOK_INCREASE_FROM_CART",
//     payload: arrIncreaseId,
//   };
// };
// export const onDecrease = (arrDecreaseId) => {
//   return {
//     type: "BOOK_DECREASE_FROM_CART",
//     payload: arrDecreaseId,
//   };
// };
const fetchBooksOld = (bookstoreService, dispatch) => () => {
  // 1. recieve data

  dispatch(booksRequested());
  bookstoreService
    .getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)));
};
const fetchBooks = (bookstoreService) => () => (dispatch) => {
  dispatch(booksRequested());
  bookstoreService
    .getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)));
};
export { fetchBooks };
