import * as React from 'react';
import { useParams } from 'react-router';
import { Flex } from '@bitrise/bitkit';
import FilterSection from '../Filters/FilterSection';
import { callApi } from '../../services/api';
import { useCookies } from 'react-cookie';

const Page = () => {
  let { appId } = useParams();
  const tokenKey = `token-${appId}`;
  const [cookie, setCookie] = useCookies([tokenKey]);

  callApi('GET', `insights/app/${appId}`, cookie[tokenKey]).then(() => {});

  return (
    <Flex width="100%" padding="x8">
      <FilterSection></FilterSection>
    </Flex>
  );
};

export default Page;
