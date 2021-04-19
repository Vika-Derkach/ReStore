import React, { Component } from "react";
import { connect } from "react-redux";
import { booksLoaded } from "../../actions";
import { compose } from "../../utils";
import BookListItem from "../book-list-item";
import { withBookstoreService } from "../hoc";
import "./book-list.css";

class BookList extends Component {
  componentDidMount() {
    //1. recieve data
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();
    console.log(data);
    //2. dispatch action to store
    this.props.booksLoaded(data);
  }
  render() {
    const { books } = this.props;

    return (
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem book={book} />
            </li>
          );
        })}
      </ul>
    );
  }
}
const mapStateToProps = ({ books }) => {
  return { books };
};
const matDispatchToProps = {
  booksLoaded,
};
export default compose(
  withBookstoreService(),
  connect(mapStateToProps, matDispatchToProps)
)(BookList);