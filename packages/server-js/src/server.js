import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type User {
    id: ID
    name: String
  }
  type Event {
    id: ID
    title: String
    date: String
    organizer: User
  }
  type Query {
    users: [User]
    events: [Event]
  }
`;

const users = [
  { id: "1", name: "Alice" },
  { id: "2", name: "Bob" }
];

const events = [
  { id: "101", title: "Soirée jeux", date: "2025-10-01", organizer: users[0] },
  { id: "102", title: "Hackathon", date: "2025-11-15", organizer: users[1] }
];

const resolvers = {
  Query: {
    users: () => users,
    events: () => events
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`🚀 Server ready at ${url}`));
