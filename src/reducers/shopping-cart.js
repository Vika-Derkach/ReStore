const updateCartItems = (cartItems, item, idx) => {
  if (item.count === 0) {
    return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
  }
  if (idx === -1) {
    return [...cartItems, item];
  }
  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const updateCartItem = (book, item = {}, quantity) => {
  const { id = book.id, count = 0, title = book.title, total = 0 } = item;
  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * book.price,
  };
};
const updateOrder = (state, bookId, quantity) => {
  const {
    bookList: { books },
    shoppingCart: { cartItems },
  } = state;
  // const { count } = cartItems;
  const book = books.find(({ id }) => id === bookId);
  const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
  const itemBook = cartItems[itemIndex];
  // const obj = cartItems.find(({ count }) => count);

  console.log(cartItems);
  const newItem = updateCartItem(book, itemBook, quantity);
  const updatedItems = updateCartItems(cartItems, newItem, itemIndex);
  // console.log(newItem.count);
  // console.log(cartItems.id);
  let countCart = 0;
  let countPriceCart = 0;
  updatedItems.forEach((updatedItem) => {
    countCart = updatedItem.count + countCart;
  });
  updatedItems.forEach((updatedItem) => {
    countPriceCart = updatedItem.total + countPriceCart;
  });
  return {
    oderedItem: countCart,
    orderTotal: countPriceCart,
    cartItems: updatedItems,
  };
};

const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      oderedItem: 0,
      cartItems: [],
      orderTotal: 0,
    };
  }
  switch (action.type) {
    case "BOOK_ADDED_TO_CART":
      return updateOrder(state, action.payload, 1);
    case "BOOK_REMOVE_FROM_CART":
      return updateOrder(state, action.payload, -1);
    case "ALL_BOOK_REMOVE_FROM_CART":
      const item = state.shoppingCart.cartItems.find(
        ({ id }) => id === action.payload
      );
      return updateOrder(state, action.payload, -item.count);
    default:
      return state.shoppingCart;
  }
};
export default updateShoppingCart;
