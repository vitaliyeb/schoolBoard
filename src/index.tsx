import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Board from './board';

export const BoardWrapper = () => {

  return (
      <Provider store={store}>
        <Board />
      </Provider>
  );
};
