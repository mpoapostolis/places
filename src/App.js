import React from 'react';
import { Provider } from 'react-redux';
import Store from './redux';
import Rooter from './Router';

const App = () =>
  <Provider store={Store}>
    <Rooter />
  </Provider>;

export default App;
