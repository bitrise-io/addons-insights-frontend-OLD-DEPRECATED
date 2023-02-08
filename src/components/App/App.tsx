import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import { AddonFooter, AppLayout, AppLayoutBody, AppLayoutHeader, AppLayoutMain, Flex } from '@bitrise/bitkit';
import dataAtIds from '../../dataAtIds.json';
import AppBeam from './AppBeam';
import Page from '../Page/Page';

const App = () => {
  return (
    <AppLayout backgroundColor="white" data-insights-at-id={dataAtIds.RootApp}>
      <AppLayoutHeader>
        <AppBeam></AppBeam>
      </AppLayoutHeader>
      <AppLayoutBody>
        <Router>
          <Switch>
            <Route path="/:appId" children={<Page />} />
            <Route path="/">
              <div></div>
            </Route>
          </Switch>
        </Router>
      </AppLayoutBody>
      <Flex paddingVertical="x16">
        <AddonFooter addonName="Insights" />
      </Flex>
    </AppLayout>
  );
};

export default App;
