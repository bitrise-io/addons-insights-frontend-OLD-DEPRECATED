import * as React from 'react';
import { AddonBeam } from '@bitrise/bitkit';
import store from '../../store';

interface Props {
  isMenuActive?: boolean;
  onToggleMenu?: () => void;
}

export default function AppBeam(props: React.PropsWithChildren<Props>) {
  const { isMenuActive, onToggleMenu, ...rest } = props;
  const state = store.getState();

  return (
    <AddonBeam
      {...rest}
      addonIcon="Folder"
      addonName="Insights"
      appLink={`https://app.bitrise.io/app/${state.appState.appID}`}
      appName={state.appState.appTitle}
      backgroundColor="grape-4"
      isHamburgerIconActive={true}
      isInResponsiveView={false}
      onHamburgerIconClick={onToggleMenu}
      textColor="gray-1"
    />
  );
}
