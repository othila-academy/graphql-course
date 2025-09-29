import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

// Configure Apollo Client to connect to your GraphQL server
const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql', // Apollo Server endpoint
  // If you want to use the Python server instead, use:
  // uri: 'http://127.0.0.1:5000/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;