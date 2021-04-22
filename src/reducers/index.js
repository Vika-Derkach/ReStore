const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItem: [],
  orderTotal: 220,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BOOKS_REQUEST":
      return {
        ...state,
        books: [],
        loading: true,
        error: null,
      };
    case "FETCH_BOOKS_SUCCESS":
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_BOOKS_FAILURE":
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload,
      };
    case "BOOK_ADDED_TO_CART":
      const bookId = action.payload;
      const cartBook = state.cartItem.find((book) => book.id === bookId);
      if (!cartBook) {
        const book = state.books.find((book) => book.id === bookId);
        const newItem = {
          id: book.id,
          name: book.title,
          count: 1,
          total: book.price,
        };

        return {
          ...state,
          cartItem: [...state.cartItem, newItem],
        };
      }
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default reducer;
