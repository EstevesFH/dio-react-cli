import React from 'react';
import { LoadingContainer, Spinner } from './styles';

const Loading = () => {
  return (
    <LoadingContainer>
      <Spinner />
      <p>Carregando...</p>
    </LoadingContainer>
  );
};

export { Loading };
