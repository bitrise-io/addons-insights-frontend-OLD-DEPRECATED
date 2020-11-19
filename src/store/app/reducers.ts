import { AppActionTypes, AppState, UPDATE_SESSION } from './types';

const initialState: AppState = {
  appID: '',
  appTitle: '',
  token: '',
};

export default function appReducer(state: AppState = initialState, action: AppActionTypes): AppState {
  switch (action.type) {
    case UPDATE_SESSION:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
