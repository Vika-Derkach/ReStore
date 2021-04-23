import updateBookList from "./book-list";
import updateShoppingCart from "./shopping-cart";

const reducer = (state, action) => {
  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action),
  };

  // case "BOOK_DELETED_FROM_CART":
  //   const { cartItems } = state;
  //   const arrId = action.payload;
  //   const cartIndex = state.cartItems.findIndex(({ id }) => id === arrId);
  //   const newCartItem = [
  //     ...cartItems.slice(0, cartIndex),
  //     ...cartItems.slice(cartIndex + 1),
  //   ];
  //   return {
  //     ...state,
  //     cartItems: newCartItem,
  //   };
  // case "BOOK_INCREASE_FROM_CART":
  //   const arrIncreaseId = action.payload;
  //   const bookIn = state.books.find((book) => book.id === arrIncreaseId);
  //   const cartIncreseIndex = state.cartItems.findIndex(
  //     ({ id }) => id === arrIncreaseId
  //   );
  //   const itemIncrease = state.cartItems[cartIncreseIndex];
  //   const newIncreasedItem = {
  //     ...itemIncrease,
  //     count: itemIncrease.count + 1,
  //     total: itemIncrease.total + bookIn.price,
  //   };
  //   return {
  //     ...state,
  //     cartItems: [
  //       ...state.cartItems.slice(0, cartIncreseIndex),
  //       newIncreasedItem,
  //       ...state.cartItems.slice(cartIncreseIndex + 1),
  //     ],
  //   };
  // case "BOOK_DECREASE_FROM_CART":
  //   const arrDecreaseId = action.payload;
  //   const bookDe = state.books.find((book) => book.id === arrDecreaseId);
  //   const cartDecreseIndex = state.cartItems.findIndex(
  //     ({ id }) => id === arrDecreaseId
  //   );
  //   const itemDecrease = state.cartItems[cartDecreseIndex];
  //   const newDecreasedItem = {
  //     ...itemDecrease,
  //     count: itemDecrease.count - 1,
  //     total: itemDecrease.total - bookDe.price,
  //   };

  //   return {
  //     ...state,
  //     cartItems: [
  //       ...state.cartItems.slice(0, cartDecreseIndex),
  //       newDecreasedItem,
  //       ...state.cartItems.slice(cartDecreseIndex + 1),
  //     ],
  //   };
};
export default reducer;
