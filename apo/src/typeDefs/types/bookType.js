const { gql } = require("apollo-server");

const bookType = gql`
  type Book {
    title: String
    author: String
    stock: Int
  }
`;
