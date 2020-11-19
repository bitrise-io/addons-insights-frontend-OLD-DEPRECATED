export interface DashboardFilterState {
  branch?: string;
  workflow?: string;
  stack?: string;
  machineType?: string;
}

export const UPDATE_FILTERS = 'UPDATE_FILTERS';

interface UpdateDashboardFiltersAction {
  type: typeof UPDATE_FILTERS;
  payload: DashboardFilterState;
}

export type DashboardActionTypes = UpdateDashboardFiltersAction;
