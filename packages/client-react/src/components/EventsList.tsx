import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_EVENTS } from '../queries';

interface User {
  id: string;
  name: string;
}

interface Event {
  id: string;
  title: string;
  date: string;
  organizer: User;
}

interface EventsData {
  events: Event[];
}

const EventsList: React.FC = () => {
  const { loading, error, data } = useQuery<EventsData>(GET_EVENTS);

  if (loading) return <div className="loading">Loading events...</div>;
  if (error) return <div className="error">Error: {error.message}</div>;

  return (
    <div className="events-list">
      <h2>📅 Events</h2>
      {data?.events.map((event) => (
        <div key={event.id} className="event-card">
          <h3>{event.title}</h3>
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Organizer:</strong> {event.organizer.name}</p>
        </div>
      ))}
    </div>
  );
};

export default EventsList;