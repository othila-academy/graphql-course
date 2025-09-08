# Séance 2 – Types avancés & structuration

## Objectifs
- Introduire les approches schema‑first (JS Apollo) vs code‑first (Graphene Python).
- Ajouter des types personnalisés: `enum`, `interface`, `union`, objet embarqué (`DateRange`).
- Mettre en place les relations 1‑N (organizer -> events) et N‑N (event <-> participants).
- Utiliser un fragment GraphQL (`UserInfo`) pour factoriser les champs répétés.

## Nouveautés par rapport à la Séance 1
| Concept | Implémentation | But |
|---------|----------------|-----|
| Relation 1‑N | `User.organizedEvents` | Tous les events dont l'utilisateur est l'organisateur |
| Relation N‑N | `Event.participants` & `User.participatingEvents` | Plusieurs users sur plusieurs events |
| Objet embarqué | `DateRange { start end }` | Encapsuler la période d'un event (déprécie `date`) |
| Enum | `EventCategory` | Catégoriser les events |
| Interface | `Node` | Patron commun avec `id` pour `User` et `Event` |
| Union | `SearchResult = User | Event` | Résultat hétérogène d'une recherche |
| Fragment | `fragment UserInfo on User { id name }` | Réutilisation de sélection |

## Schéma (extrait commun conceptuel)
```
interface Node { id: ID! }

type User implements Node {
  id: ID!
  name: String!
  organizedEvents: [Event!]!
  participatingEvents: [Event!]!
}

type DateRange { start: String! end: String! }

enum EventCategory { SOCIAL TECH MEETUP OTHER }

type Event implements Node {
  id: ID!
  title: String!
  category: EventCategory!
  dateRange: DateRange!
  # Ancien champ gardé pour rétro‑compatibilité
  date: String @deprecated(reason: "Utiliser dateRange")
  organizer: User!
  participants: [User!]!
}

union SearchResult = User | Event

type Query {
  users: [User!]!
  events: [Event!]!
  search(term: String!): [SearchResult!]!
}
```

## Exemple de requête avec fragment
```
fragment UserInfo on User { id name }

query Dashboard {
  events {
    id
    title
    category
    dateRange { start end }
    organizer { ...UserInfo }
    participants { ...UserInfo }
  }
}
```

## Exemple de recherche (union + inline fragments)
```
query Search($q: String!) {
  search(term: $q) {
    ... on User { id name }
    ... on Event { id title category }
  }
}
```

## Points pédagogiques
1. Interface `Node` montre la factorisation côté schéma (vs fragment côté requête client).
2. `DateRange` illustre la modélisation d'un concept métier plutôt qu'un simple scalaire.
3. Enum garantit un set contrôlé de catégories (validation côté serveur & introspection claire).
4. Union `SearchResult` permet une API plus flexible sans route supplémentaire.
5. Fragments améliorent lisibilité + DRY dans les clients.

## Prochaines pistes (séances futures)
- Mutations (création / inscription à un event).
- Input types & validation.
- Pagination & filtres.
- Directives custom & auth.

---
> Astuce : Garder temporairement l'ancien champ `date` avec `@deprecated` aide les clients à migrer progressivement vers `dateRange`.
