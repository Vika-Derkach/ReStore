import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { bookAddedToCart, fetchBooks } from "../../actions";
import { compose } from "../../utils";
import BookListItem from "../book-list-item";
import ErrorIndicator from "../error-indicator";
import { withBookstoreService } from "../hoc";
import Spinner from "../spinner";
import "./book-list.css";
const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className="book-list">
      {books.map((book) => {
        return (
          <li key={book.id}>
            <BookListItem
              book={book}
              onAddedToCart={() => onAddedToCart(book.id, book.count)}
              // onClicked={() => onClicked(book.count)}
            />
          </li>
        );
      })}
    </ul>
  );
};
class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }
  render() {
    const { books, loading, error, onAddedToCart } = this.props;
    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return <ErrorIndicator />;
    }
    return <BookList books={books} onAddedToCart={onAddedToCart} />;
  }
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  return { books, loading, error };
};
const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  // const { booksLoaded, booksRequested, booksError } = this.props;
  return bindActionCreators(
    {
      fetchBooks: fetchBooks(bookstoreService),
      onAddedToCart: bookAddedToCart,
    },
    dispatch
  );
};
export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
