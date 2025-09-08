# Python Version – Flask + Graphene (Séance 2)

## Prérequis
- Python 3.10+

## Installation & démarrage
```
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

## Structure
```
schema.py        # Définition (code-first) des types / enums / interface / union
server.py        # Factory Flask + montage GraphQL
app.py           # Entrée exécutable
FRAGMENTS_EXAMPLE.graphql
```

## Concepts ajoutés
- Interface `Node`
- Enum `EventCategory`
- Objet `DateRange`
- Relations 1-N & N-N
- Union `SearchResult`
- Champ déprécié `Event.date`

## Requête (fragment)
```
fragment UserInfo on User { id name }
query {
  events { id title category dateRange { start end } organizer { ...UserInfo } participants { ...UserInfo } }
}
```

## Recherche
```
query { search(term: "hack") { ... on Event { id title } ... on User { id name } } }
```

## Note
`date` est conservé pour transition vers `dateRange`.

