# GraphQL Course - React Client

This React client has been migrated from Create React App to Vite for better performance and modern tooling.

Ce client React TypeScript utilise Apollo Client pour consommer les APIs GraphQL du cours. Il permet aux étudiants d'apprendre à :
- Configurer Apollo Client
- Écrire des requêtes GraphQL 
- Gérer les états de loading/error
- Créer des composants React qui consomment GraphQL

## Technologies utilisées
- **React 18** avec TypeScript
- **Vite** pour le développement et build (migration depuis Create React App)
- **Apollo Client** pour GraphQL
- **Vitest** pour les tests
- **CSS moderne** avec variables et responsive design

## Migration vers Vite

Le projet a été migré de Create React App vers Vite pour:
- **Performance**: Démarrage plus rapide (HMR instantané)
- **Build moderne**: Utilisation d'ESBuild et Rollup
- **Configuration simplifiée**: Moins de boilerplate
- **Support TypeScript**: Intégré nativement

## Installation

Depuis la racine du monorepo:
```bash
npm install
```

Ou depuis ce répertoire:
```bash
cd packages/client-react
npm install
```

## Scripts disponibles

### `npm run dev`
Lance l'application en mode développement sur http://localhost:3000 (Vite dev server)

### `npm run build`
Génère une version de production dans le dossier `build/`

### `npm run preview`
Prévisualise la version de production localement

### `npm test`
Lance les tests avec Vitest

## Fonctionnalités

### Configuration GraphQL
- Interface pour choisir le serveur GraphQL (JavaScript ou Python)
- Configuration dynamique d'Apollo Client
- Support de both servers endpoints

### Composants GraphQL
- `EventsList` : Affiche la liste des événements avec leurs organisateurs
- `UsersList` : Affiche la liste des utilisateurs
- `GraphQLConfig` : Interface de configuration des endpoints

### Gestion des états
- Loading states avec spinners
- Error handling avec messages d'erreur
- Cache Apollo Client pour optimiser les performances

## Structure des fichiers

```
src/
├── components/
│   ├── EventsList.tsx      # Liste des événements
│   ├── UsersList.tsx       # Liste des utilisateurs
│   └── GraphQLConfig.tsx   # Configuration GraphQL
├── queries.ts              # Requêtes GraphQL
├── apollo-client.ts        # Configuration Apollo Client
├── App.tsx                # Composant principal
└── App.css                # Styles de l'application
```

## Configuration des endpoints

Le client peut se connecter aux deux serveurs :

### Serveur JavaScript (Apollo Server)
- URL: `http://localhost:4000/graphql`
- Apollo Sandbox disponible

### Serveur Python (Flask + Graphene)  
- URL: `http://127.0.0.1:5000/graphql`
- GraphiQL disponible

## Utilisation pédagogique

### Pour les étudiants
1. **Session 1** : Découvrir les bases des requêtes GraphQL
2. **Session 2** : Comprendre les relations entre entités
3. **Session 3** : Ajouter des mutations (création, modification)
4. **Session 4** : Optimiser avec la pagination et les subscriptions

### Exercices suggérés
1. Modifier les requêtes pour récupérer plus/moins de champs
2. Ajouter de nouveaux composants pour d'autres entités
3. Implémenter la gestion d'erreurs personnalisée
4. Créer des mutations pour ajouter/modifier des événements

## Configuration Vite

- `vite.config.ts` - Configuration principale Vite
- `vitest.config.ts` - Configuration des tests
- `tsconfig.json` - Configuration TypeScript pour les sources
- `tsconfig.node.json` - Configuration TypeScript pour les outils de build

## Prochaines étapes

Pour étendre ce client, les étudiants peuvent :
- Ajouter la gestion de l'authentification JWT
- Implémenter des mutations (CRUD operations)
- Ajouter la pagination pour les grandes listes
- Intégrer des subscriptions pour le temps réel
- Améliorer l'UI avec une librairie de composants