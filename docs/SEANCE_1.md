# Séance 1 – Fondamentaux & première API

## Objectifs
- Lancer l’API fil rouge avec `User` et `Event`.
- Exécuter des queries simples (liste des events, organisateur).

## Étapes
1) Installer dépendances & lancer serveur.
2) Vérifier `Query` de base:
```
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
3) Étendre le schéma: ajouter `date: String` à `Event` et l’afficher.

## Défi (badge Query Explorer)
- Query: titre d’un event + nom de l’organisateur en une seule requête.
