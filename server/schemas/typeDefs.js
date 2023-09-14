const typeDefs = `
type User {
    _id : ID
    username: String
    email: String
    bookCount: Integer
    savedBooks: [Book]
}

type Book {
    bookId: ID
    authors: [String]!
    description: String
    title: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(book author: Array!, description: String!, bookId: ID!): Auth
    removeBook(bookId: ID!): User
  }
  `;
