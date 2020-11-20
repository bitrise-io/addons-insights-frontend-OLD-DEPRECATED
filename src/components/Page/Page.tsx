import * as React from 'react';
import { useParams } from 'react-router';
import { Flex } from '@bitrise/bitkit';
import FilterSection from '../Filters/FilterSection';
import { callApi } from '../../services/api';
import { useCookies } from 'react-cookie';
import BuildDuration from '../Charts/BuildDuration';
import { Insights } from '../../models/Insights';
import { filter, groupBy, mapValues } from 'lodash';

const Page = () => {
  let { appId } = useParams();
  const tokenKey = `token-${appId}`;
  const [cookie, setCookie] = useCookies([tokenKey]);
  const [data, setData] = React.useState({});
  const [filters, setFilters] = React.useState({});
  const [xDomain, setXDomain] = React.useState([]);
  const [yDomain, setYDomain] = React.useState([]);

  const duration = (start: string, end: string): number => {
    const s = Date.parse(start);
    const e = Date.parse(end);
    return (e - s) / 1000;
  };

  React.useEffect(() => {
    callApi('GET', `insight/app/${appId}`, cookie[tokenKey]).then((resp) => {
      var xDom = [];
      for (var i = 0; i <= resp.builds.length; i++) {
        xDom.push(i);
      }
      setXDomain(xDom);

      let maxDur = -9999999999999;
      let bs = resp.builds.map((build, idx) => {
        const dur = duration(build.environment_prepare_finished_at, build.finished_at);
        if (dur > maxDur) {
          maxDur = dur;
        }
        return {
          x: idx + 1,
          y: dur,
          status: build.status,
        };
      });

      var yDom = [];
      for (let index = 0; index < maxDur; index += maxDur / 5) {
        yDom.push(index);
      }
      setYDomain(yDom);

      bs = mapValues(groupBy(bs, 'status'));
      setData(bs);
      setFilters(resp.filter_options);
    });
  }, [appId]);

  return (
    <Flex width="100%" padding="x8">
      <Flex>
        <FilterSection
          branches={filters.branches}
          workflows={filters.workflows}
          stacks={filters.stacks}
          machineTypes={filters.machine_types}
        ></FilterSection>
      </Flex>
      <Flex>
        <BuildDuration series={data} xDomain={xDomain} yDomain={yDomain}></BuildDuration>
      </Flex>
    </Flex>
  );
};

export default Page;
