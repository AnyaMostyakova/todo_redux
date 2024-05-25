import { createStore } from 'redux';
import todoReducer from './reducer';

const store = createStore(todoReducer);

export type RootState = ReturnType<typeof store.getState>;

export default store;
