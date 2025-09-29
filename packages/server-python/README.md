# Python Version – Flask + Graphene

## Prérequis
- Python 3.10+ (venv recommandé)

## Installation
```
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

## Test rapide (GraphiQL)
Ouvrir http://127.0.0.1:5000/graphql et exécuter :
```
query {
  events { id title date organizer { id name } }
  users { id name }
}
```
