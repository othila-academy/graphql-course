# Projet fil rouge – Plateforme d’événements (GraphQL)

Ce dépôt contient deux versions **équivalentes** du projet fil rouge du cours : une en **JavaScript (Apollo Server)** et une en **Python (Graphene)**.

## Objectif pédagogique
Construire progressivement une API GraphQL complète (queries, mutations, relations, sécurité JWT, pagination, temps réel) autour d’un cas concret : **gestion d’événements étudiants**.

## Organisation
- `js-version/` – Implémentation Node.js + Apollo Server.
- `python-version/` – Implémentation Python + Flask + Graphene.
- `docs/` – Consignes de séance, gamification, checklist évaluation.
- `scripts/` – Snippets utiles (GraphQL queries/mutations).

## Stratégie Git (branches & tags)
Chaque séance du cours correspond à une branche. Vous partez de `main` puis vous créez/mergez **une branche par séance** :

```
main
 ├─ session-1 (Fondamentaux + premier schéma)
 ├─ session-2 (Relations avancées)
 ├─ session-3 (Mutations + sécurité JWT + clients)
 ├─ session-4 (Perfs: DataLoader + Pagination + Subscriptions)
 └─ session-5-final (Projet final & évaluation)
```

**Tags recommandés** pour figer les jalons :
```
v1.0-s1, v1.0-s2, v1.0-s3, v1.0-s4, v1.0-s5-final
```

## Démarrage rapide
1) Choisissez votre stack (JS ou Python).  
2) Suivez le `README.md` dans le dossier correspondant (installation, scripts).  
3) Lancez l’API et testez `Query` → `events` et `users`.
4) Utilisez Apollo Sandbox / GraphiQL pour exécuter les requêtes.

## Contribution (enseignant)
- Les corrections officielles peuvent vivre sur des branches `solution/session-X`.
- Vous pouvez ouvrir des PR (*Pull Requests*) depuis les branches des étudiants.
- Voir `docs/CONTRIBUTING.md` pour la charte et le flux de travail.
