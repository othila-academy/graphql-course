import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import Navigation, { TabType } from './components/Navigation';
import Dashboard from './components/Dashboard';
import EventsList from './components/EventsList';
import UsersList from './components/UsersList';
import EventManager from './components/EventManager';
import client from './apollo-client';
import './App.css';

function App() {
  // TODO: Le client Apollo est importé depuis apollo-client.ts
  // TODO: Assurez-vous que la configuration Apollo est correcte avant d'utiliser l'application

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <h1>🚀 GraphQL Course - Event Platform</h1>
          <p>Apprenez GraphQL avec React et Apollo Client !</p>
        </header>
        
        <main className="App-main">
          {/* Navigation et informations pédagogiques */}
          <div className="course-info">
            <h2>🎯 Objectifs du TP</h2>
            <p>Cette interface montre des données factices. Votre mission est d'intégrer GraphQL pour récupérer les vraies données !</p>
            <div className="todo-indicators">
              <span className="todo-badge">TODO GraphQL à faire</span>
              <span className="mock-badge">Données factices</span>
            </div>
          </div>

          {/* Section principale avec les composants */}
          <div className="content-grid">
            {/* TODO: Ces composants utilisent des données factices - remplacez par GraphQL */}
            <EventsList />
            <UsersList />
          </div>
          
          {/* Section de gestion des événements */}
          <div className="management-section">
            <EventManager />
          </div>
          
          {/* Section d'aide pour les étudiants */}
          <div className="student-help">
            <h3>� Prochaines étapes</h3>
            <ul>
              <li>Configurez Apollo Client dans <code>apollo-client.ts</code></li>
              <li>Définissez vos requêtes GraphQL dans <code>queries.ts</code></li>
              <li>Remplacez les données factices par useQuery dans les composants</li>
            </ul>
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
