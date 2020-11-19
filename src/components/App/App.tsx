import * as React from 'react';
import {AppLayout} from '@bitrise/bitkit';
import dataAtIds from '../../dataAtIds.json';

export const AuthContext = React.createContext({
  accountId: '',
  appId: '',
  plan: '',
  appTitle: '',
  token: '',
});

export default function App() {
  return (
      <AppLayout backgroundColor="gray-1" data-trace-at-id={ dataAtIds.RootApp }>Hello</AppLayout>
  );
};