import React from "react";
import { BookstoreServiceConsumer } from "../bookstore-service-context";

const withBookstoreService = () => (Wrapped) => {
  return (props) => {
    return (
      <BookstoreServiceConsumer>
        {(bookstoreService) => {
          // const serviceProps = mapMethodsToProps(bookstoreService);

          return <Wrapped {...props} bookstoreService={bookstoreService} />;
        }}
      </BookstoreServiceConsumer>
    );
  };
};

export default withBookstoreService;
