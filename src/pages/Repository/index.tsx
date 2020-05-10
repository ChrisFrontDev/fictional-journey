import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface RepositoryParamsRoute {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParamsRoute>();

  return <h1> Repository: {params.repository} </h1>;
};

export default Repository;
