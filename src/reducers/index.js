const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 220,
};
const updateCartItems = (cartItems, item, idx) => {
  if (idx === -1) {
    return [...cartItems, item];
  }
  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const updateCartItem = (book, item = {}) => {
  const { id = book.id, count = 0, title = book.title, total = 0 } = item;
  return {
    id,
    title,
    count: count + 1,
    total: total + book.price,
  };
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
      const book = state.books.find((book) => book.id === bookId);
      const itemIndex = state.cartItems.findIndex(({ id }) => id === bookId);
      const item = state.cartItems[itemIndex];

      const newItem = updateCartItem(book, item);
      return {
        ...state,
        cartItems: updateCartItems(state.cartItems, newItem, itemIndex),
      };
    case "BOOK_DELETED_FROM_CART":
      const { cartItems } = state;
      const arrId = action.payload;
      const cartIndex = state.cartItems.findIndex(({ id }) => id === arrId);
      const newCartItem = [
        ...cartItems.slice(0, cartIndex),
        ...cartItems.slice(cartIndex + 1),
      ];
      return {
        ...state,
        cartItems: newCartItem,
      };
    case "BOOK_INCREASE_FROM_CART":
      const arrIncreaseId = action.payload;
      const bookIn = state.books.find((book) => book.id === arrIncreaseId);
      const cartIncreseIndex = state.cartItems.findIndex(
        ({ id }) => id === arrIncreaseId
      );
      const itemIncrease = state.cartItems[cartIncreseIndex];
      const newIncreasedItem = {
        ...itemIncrease,
        count: itemIncrease.count + 1,
        total: itemIncrease.total + bookIn.price,
      };
      return {
        ...state,
        cartItems: [
          ...state.cartItems.slice(0, cartIncreseIndex),
          newIncreasedItem,
          ...state.cartItems.slice(cartIncreseIndex + 1),
        ],
      };
    case "BOOK_DECREASE_FROM_CART":
      const arrDecreaseId = action.payload;
      const bookDe = state.books.find((book) => book.id === arrDecreaseId);
      const cartDecreseIndex = state.cartItems.findIndex(
        ({ id }) => id === arrDecreaseId
      );
      const itemDecrease = state.cartItems[cartDecreseIndex];
      const newDecreasedItem = {
        ...itemDecrease,
        count: itemDecrease.count - 1,
        total: itemDecrease.total - bookDe.price,
      };

      return {
        ...state,
        cartItems: [
          ...state.cartItems.slice(0, cartDecreseIndex),
          newDecreasedItem,
          ...state.cartItems.slice(cartDecreseIndex + 1),
        ],
      };

    default:
      return state;
  }
};
export default reducer;
