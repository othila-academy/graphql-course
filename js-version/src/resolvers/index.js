import { users, events } from '../data/mockData.js';

export const resolvers = {
  Node: {
    __resolveType(obj) {
      if (obj.title) return 'Event';
      if (obj.organizedEvents !== undefined || obj.participatingEvents !== undefined || obj.name) return 'User';
      return null;
    }
  },
  SearchResult: {
    __resolveType(obj) {
      if (obj.title) return 'Event';
      if (obj.name) return 'User';
      return null;
    }
  },
  Query: {
    users: () => users,
    events: () => events,
    search: (_, { term }) => {
      const lower = term.toLowerCase();
      return [
        ...users.filter(u => u.name.toLowerCase().includes(lower)),
        ...events.filter(e => e.title.toLowerCase().includes(lower))
      ];
    }
  },
  User: {
    organizedEvents: (user) => events.filter(e => e.organizerId === user.id),
    participatingEvents: (user) => events.filter(e => e.participantIds.includes(user.id))
  },
  Event: {
    organizer: (event) => users.find(u => u.id === event.organizerId),
    participants: (event) => event.participantIds.map(pid => users.find(u => u.id === pid))
  }
};
