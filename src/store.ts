import { combineReducers, createStore } from 'redux';
import appReducer from './store/app/reducers';
import dashboardReducer from './store/dashboard/reducers';

const store = createStore(combineReducers({ appState: appReducer, dashboardState: dashboardReducer }));

export default store;
