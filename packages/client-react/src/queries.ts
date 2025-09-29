import { gql } from '@apollo/client';

// GraphQL queries for the Events platform
export const GET_EVENTS = gql`
  query GetEvents {
    events {
      id
      title
      date
      organizer {
        id
        name
      }
    }
  }
`;

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
    }
  }
`;

// Combined query for both events and users
export const GET_EVENTS_AND_USERS = gql`
  query GetEventsAndUsers {
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
`;