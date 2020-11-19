import { createStore } from 'redux';
import appReducer from './store/app/reducers';

const store = createStore(appReducer);

export default store;
