export interface AppState {
  appID: string;
  appTitle: string;
  token: string;
}

export const UPDATE_SESSION = 'UPDATE_SESSION';

interface UpdateSessionAction {
  type: typeof UPDATE_SESSION;
  payload: AppState;
}

export type AppActionTypes = UpdateSessionAction;
