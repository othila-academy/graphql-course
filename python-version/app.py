import graphene
from flask import Flask
from flask_graphql import GraphQLView

class User(graphene.ObjectType):
    id = graphene.ID()
    name = graphene.String()

class Event(graphene.ObjectType):
    id = graphene.ID()
    title = graphene.String()
    date = graphene.String()
    organizer = graphene.Field(User)

class Query(graphene.ObjectType):
    users = graphene.List(User)
    events = graphene.List(Event)

    def resolve_users(self, info):
        return [User(id="1", name="Alice"), User(id="2", name="Bob")]

    def resolve_events(self, info):
        return [
            Event(id="101", title="Soirée jeux", date="2025-10-01", organizer=User(id="1", name="Alice")),
            Event(id="102", title="Hackathon", date="2025-11-15", organizer=User(id="2", name="Bob"))
        ]

schema = graphene.Schema(query=Query)

app = Flask(__name__)
app.add_url_rule('/graphql', view_func=GraphQLView.as_view('graphql', schema=schema, graphiql=True))

if __name__ == '__main__':
    app.run()
