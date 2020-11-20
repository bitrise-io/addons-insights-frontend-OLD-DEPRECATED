import { camelCase, mapKeys, values } from 'lodash';

export interface Insights {
  appSlug?: string;
}

export interface Build {
  branch: string;
  buildNumber: number;
  environmentPrepareFinishedAt: Date;
  finishedAt: Date;
  machineTypeId: string;
  slug: string;
  stackIdentifier: string;
  status: number;
  triggeredAt: Date;
  triggeredWorkflow: 'primary';
}

export interface BuildResponse {
  branch: string;
  build_number: number;
  environment_prepare_finished_at: Date;
  finishedAt: Date;
  machineTypeId: string;
  slug: string;
  stackIdentifier: string;
  status: number;
  triggeredAt: Date;
  triggeredWorkflow: 'primary';
}

export default parseBuilds;
