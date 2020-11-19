import { DashboardActionTypes, DashboardFilterState, UPDATE_FILTERS } from './types';

const initialState: DashboardFilterState = {
  branch: '',
  workflow: '',
  stack: '',
  machineType: '',
};

export default function dashboardReducer(
  state: DashboardFilterState = initialState,
  action: DashboardActionTypes
): DashboardFilterState {
  switch (action.type) {
    case UPDATE_FILTERS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
