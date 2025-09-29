import React, { useState } from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import EventsList from './components/EventsList';
import UsersList from './components/UsersList';
import GraphQLConfig from './components/GraphQLConfig';
import './App.css';

function App() {
  const [graphqlEndpoint, setGraphqlEndpoint] = useState('http://localhost:4000/graphql');
  
  // Create Apollo Client with configurable endpoint
  const httpLink = createHttpLink({
    uri: graphqlEndpoint,
  });

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

  const handleEndpointChange = (newEndpoint: string) => {
    setGraphqlEndpoint(newEndpoint);
    // Note: In a real app, you might want to reinitialize the client
    // For educational purposes, we'll show a message to refresh
    if (newEndpoint !== graphqlEndpoint) {
      alert('Endpoint changed! Please refresh the page to apply the new configuration.');
    }
  };

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <h1>🚀 GraphQL Course - Event Platform</h1>
          <p>Learn GraphQL with React, Apollo, and multiple server implementations!</p>
        </header>
        
        <main className="App-main">
          <GraphQLConfig 
            currentEndpoint={graphqlEndpoint}
            onEndpointChange={handleEndpointChange}
          />
          
          <div className="content-grid">
            <EventsList />
            <UsersList />
          </div>
        </main>
        
        <footer className="App-footer">
          <p>🎓 Othila Academy - GraphQL Course</p>
        </footer>
      </div>
    </ApolloProvider>
  );
}

export default App;
