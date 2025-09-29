# Séance 1 – Fondamentaux & première API + Client React

## Objectifs
- Lancer l'API fil rouge avec `User` et `Event`
- Découvrir le client React Apollo
- Exécuter des queries simples (liste des events, organisateur)
- Comprendre l'architecture GraphQL client-serveur

## Étapes

### 1) Setup du monorepo
```bash
# Installer toutes les dépendances
npm install

# Optionnel: installer les dépendances Python
npm run install:python
```

### 2) Lancement du serveur GraphQL
Choisir l'une des options :

**Option A: Serveur JavaScript (recommandé)**
```bash
npm run start:server-js
```

**Option B: Serveur Python**
```bash
npm run start:server-python
```

### 3) Lancement du client React
```bash
# Dans un nouveau terminal
npm run start:client
```

### 4) Test des requêtes de base

**Dans Apollo Sandbox** (http://localhost:4000) ou **GraphiQL** (http://127.0.0.1:5000/graphql):
```graphql
query {
  events {
    id
    title
    date
    organizer { id name }
  }
  users { id name }
}
```

**Dans le client React** (http://localhost:3000):
- Observer l'interface utilisateur
- Tester le changement d'endpoint GraphQL
- Voir les données s'afficher en temps réel

### 5) Extension du schéma
Ajouter `date: String` à `Event` et vérifier l'affichage dans le client.

## Défis (badges)

### 🏅 Query Explorer
- **Serveur**: Créer une query qui retourne le titre d'un event + nom de l'organisateur
- **Client React**: Modifier une requête dans `queries.ts` pour afficher plus/moins de champs
- **Interface**: Explorer les deux endpoints (JS et Python) dans l'interface

### 🏅 React GraphQL Basics  
- Comprendre le code des composants `EventsList` et `UsersList`
- Modifier les styles CSS pour personaliser l'apparence
- Ajouter une nouvelle query simple

## Points d'apprentissage

### Côté serveur GraphQL
- Schema definition avec types `User` et `Event`
- Resolvers pour `users` et `events`
- Relations entre entités (`organizer`)

### Côté client React
- Configuration Apollo Client
- Hook `useQuery` pour exécuter des requêtes
- Gestion des states: `loading`, `error`, `data`
- Structure des composants React avec GraphQL

### Architecture complète
- Séparation client-serveur
- Communication via HTTP/GraphQL
- Configuration d'endpoints flexibles