import React, { useState } from 'react';

interface GraphQLConfigProps {
  currentEndpoint: string;
  onEndpointChange: (endpoint: string) => void;
}

const GraphQLConfig: React.FC<GraphQLConfigProps> = ({ currentEndpoint, onEndpointChange }) => {
  const [selectedEndpoint, setSelectedEndpoint] = useState(currentEndpoint);

  const endpoints = [
    { label: 'JavaScript Server (Apollo)', value: 'http://localhost:4000/graphql' },
    { label: 'Python Server (Flask + Graphene)', value: 'http://127.0.0.1:5000/graphql' },
  ];

  const handleEndpointChange = (endpoint: string) => {
    setSelectedEndpoint(endpoint);
    onEndpointChange(endpoint);
  };

  return (
    <div className="graphql-config">
      <h3>🔧 GraphQL Server Configuration</h3>
      <p>Choose which GraphQL server to connect to:</p>
      <div className="endpoint-selector">
        {endpoints.map((endpoint) => (
          <label key={endpoint.value} className="endpoint-option">
            <input
              type="radio"
              name="endpoint"
              value={endpoint.value}
              checked={selectedEndpoint === endpoint.value}
              onChange={() => handleEndpointChange(endpoint.value)}
            />
            <span>{endpoint.label}</span>
            <code>{endpoint.value}</code>
          </label>
        ))}
      </div>
      <div className="current-config">
        <p><strong>Current endpoint:</strong> <code>{currentEndpoint}</code></p>
        <p><em>Note: Make sure the selected server is running!</em></p>
      </div>
    </div>
  );
};

export default GraphQLConfig;