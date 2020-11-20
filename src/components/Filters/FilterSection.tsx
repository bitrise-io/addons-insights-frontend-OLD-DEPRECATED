import { Grid, Flex } from '@bitrise/bitkit';
import * as React from 'react';
import store from '../../store';
import { UPDATE_FILTERS } from '../../store/dashboard/types';
import DropdownFilter from './DropdownFilter';

const FilterBar = () => {
  const onBranchSelect = (opt: string) => {
    store.dispatch({ type: UPDATE_FILTERS, payload: { branch: opt } });
  };
  const onWorkflowSelect = (opt: string) => {
    store.dispatch({ type: UPDATE_FILTERS, payload: { workflow: opt } });
  };

  const state = store.getState();

  return (
    <Flex direction={'horizontal'} width="100%" container={true}>
      <Flex width="25%">
        <DropdownFilter
          options={['master', 'develop']}
          selected={state.dashboardState.branch}
          onSelect={onBranchSelect}
          label={'Branch'}
        />
      </Flex>
      <Flex width="25%">
        <DropdownFilter
          options={['primary', 'develop']}
          selected={state.dashboardState.workflow}
          onSelect={onWorkflowSelect}
          label={'Workflow'}
        />
      </Flex>
      <Flex width="25%">
        <DropdownFilter
          options={['osx', 'linux']}
          selected={state.dashboardState.workflow}
          onSelect={onWorkflowSelect}
          label={'Stack'}
        />
      </Flex>
      <Flex width="25%">
        <DropdownFilter
          options={['standard', 'elite']}
          selected={state.dashboardState.workflow}
          onSelect={onWorkflowSelect}
          label={'Machine Type'}
        />
      </Flex>
    </Flex>
  );
};

export default FilterBar;
