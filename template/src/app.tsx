import { QueryClientProvider } from '@context/query-client';
import { Text } from 'react-native';
import { displayName } from '../app.json';
import { getApiServices } from '@services/services';
import React, { ReactElement } from 'react';

const App = (): ReactElement => {
  const response = getApiServices();

  // eslint-disable-next-line no-console
  console.log(response);

  return (
    <QueryClientProvider>
      <Text>Aqui empieza el codigo de {displayName}</Text>
    </QueryClientProvider>
  );
};

export { App };
