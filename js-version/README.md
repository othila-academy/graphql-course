# JS Version – Apollo Server

## Prérequis
- Node.js 18+
- npm

## Installation
```
npm install
npm run dev
```

## Test rapide (Apollo Sandbox)
Ouvrez l’URL du serveur (ex: http://localhost:4000) puis exécutez :
```
query {
  events { id title date organizer { id name } }
  users { id name }
}
```
