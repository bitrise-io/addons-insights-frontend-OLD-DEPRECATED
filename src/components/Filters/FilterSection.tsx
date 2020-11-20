import { Grid, Flex } from '@bitrise/bitkit';
import * as React from 'react';
import store from '../../store';
import { UPDATE_FILTERS } from '../../store/dashboard/types';
import DropdownFilter from './DropdownFilter';

type Props = {
  branches?: string[];
  workflows?: string[];
  stacks?: string[];
  machineTypes?: string[];
};

const FilterBar = (props: Props) => {
  const onBranchSelect = (opt: string) => {
    store.dispatch({ type: UPDATE_FILTERS, payload: { branch: opt } });
  };
  const onWorkflowSelect = (opt: string) => {
    store.dispatch({ type: UPDATE_FILTERS, payload: { workflow: opt } });
  };
  const onStackSelect = (opt: string) => {
    store.dispatch({ type: UPDATE_FILTERS, payload: { stack: opt } });
  };
  const onMachineTypeSelect = (opt: string) => {
    store.dispatch({ type: UPDATE_FILTERS, payload: { machineType: opt } });
  };

  const state = store.getState();

  return (
    <Flex direction={'horizontal'} width="100%" container={true}>
      <Flex width="25%">
        <DropdownFilter
          options={props.branches}
          selected={state.dashboardState.branch}
          onSelect={onBranchSelect}
          label={'Branch'}
        />
      </Flex>
      <Flex width="25%">
        <DropdownFilter
          options={props.workflows}
          selected={state.dashboardState.workflow}
          onSelect={onWorkflowSelect}
          label={'Workflow'}
        />
      </Flex>
      <Flex width="25%">
        <DropdownFilter
          options={props.stacks}
          selected={state.dashboardState.stack}
          onSelect={onStackSelect}
          label={'Stack'}
        />
      </Flex>
      <Flex width="25%">
        <DropdownFilter
          options={props.machineTypes}
          selected={state.dashboardState.machineType}
          onSelect={onMachineTypeSelect}
          label={'Machine Type'}
        />
      </Flex>
    </Flex>
  );
};

export default FilterBar;
