# Projet fil rouge – Plateforme d'événements (GraphQL)

Ce dépôt contient un **monorepo** du projet fil rouge du cours : deux versions **équivalentes** des serveurs GraphQL (JavaScript avec Apollo Server et Python avec Graphene) et un **client React** pour apprendre à consommer les APIs GraphQL.

## Objectif pédagogique
Construire progressivement une API GraphQL complète (queries, mutations, relations, sécurité JWT, pagination, temps réel) autour d'un cas concret : **gestion d'événements étudiants**, et apprendre à développer un client GraphQL avec React et Apollo Client.

## Organisation
- `packages/server-js/` – Serveur Node.js + Apollo Server
- `packages/server-python/` – Serveur Python + Flask + Graphene  
- `packages/client-react/` – Client React + Apollo Client + TypeScript
- `docs/` – Consignes de séance, gamification, checklist évaluation
- `scripts/` – Snippets utiles (GraphQL queries/mutations)

## Stratégie Git (branches & tags)
Chaque séance du cours correspond à une branche. Vous partez de `main` puis vous créez/mergez **une branche par séance** :

```
main
 ├─ session-1 (Fondamentaux + premier schéma + setup client)
 ├─ session-2 (Relations avancées + queries complexes)
 ├─ session-3 (Mutations + sécurité JWT + authentification client)
 ├─ session-4 (Perfs: DataLoader + Pagination + Subscriptions temps réel)
 └─ session-5-final (Projet final & évaluation)
```

**Tags recommandés** pour figer les jalons :
```
v2.0-s1, v2.0-s2, v2.0-s3, v2.0-s4, v2.0-s5-final
```

## Démarrage rapide

### Prérequis
- Node.js 18+
- npm
- Python 3.10+ (pour le serveur Python)

### Installation
```bash
# Installer toutes les dépendances du monorepo
npm install

# Installer les dépendances Python (optionnel)
npm run install:python
```

### Lancement des serveurs

#### Option 1: Serveur JavaScript (recommandé pour débuter)
```bash
# Terminal 1: Lancer le serveur Apollo
npm run start:server-js

# Terminal 2: Lancer le client React  
npm run start:client
```

#### Option 2: Serveur Python
```bash
# Terminal 1: Lancer le serveur Flask
npm run start:server-python

# Terminal 2: Lancer le client React (et changer l'endpoint dans l'interface)
npm run start:client
```

#### Option 3: Mode développement (serveur JS + client)
```bash
# Lance automatiquement serveur JS + client React
npm run dev
```

### Test rapide
1. Ouvrez http://localhost:3000 pour le client React
2. Dans l'interface, vous pouvez:
   - Choisir le serveur GraphQL (JS ou Python)
   - Voir la liste des événements et utilisateurs
   - Explorer les requêtes GraphQL en temps réel

3. Pour tester directement les APIs:
   - Apollo Sandbox: http://localhost:4000 (serveur JS)
   - GraphiQL: http://127.0.0.1:5000/graphql (serveur Python)

### Requête de test
```graphql
query {
  events { 
    id 
    title 
    date 
    organizer { 
      id 
      name 
    } 
  }
  users { 
    id 
    name 
  }
}
```

## Contribution (enseignant)
- Les corrections officielles peuvent vivre sur des branches `solution/session-X`
- Vous pouvez ouvrir des PR (*Pull Requests*) depuis les branches des étudiants
- Voir `docs/CONTRIBUTING.md` pour la charte et le flux de travail