import { Redirect } from 'expo-router';
import { NativeTabs } from 'expo-router/native-tabs';
import * as React from 'react';

import { useAuthStore as useAuth } from '@/features/auth/use-auth-store';
import { useIsFirstTime } from '@/lib/hooks/use-is-first-time';

export default function TabLayout() {
  const status = useAuth.use.status();
  const [isFirstTime] = useIsFirstTime();

  if (isFirstTime) {
    return <Redirect href="/onboarding" />;
  }
  if (status === 'signOut') {
    return <Redirect href="/login" />;
  }
  return (
    // Native tabs let iOS move the tab bar into the vertical rail and turn it
    // into a sidebar on the iPhone Duo open display; JS tab bars can't.
    <NativeTabs preferredPlacement="sidebar">
      <NativeTabs.Trigger name="(feed)" testID="feed-tab">
        <NativeTabs.Trigger.Icon sf="list.bullet.rectangle" md="feed" />
        <NativeTabs.Trigger.Label>Feed</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="(style)" testID="style-tab">
        <NativeTabs.Trigger.Icon sf="paintbrush" md="palette" />
        <NativeTabs.Trigger.Label>Style</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="(settings)" testID="settings-tab">
        <NativeTabs.Trigger.Icon sf="gearshape" md="settings" />
        <NativeTabs.Trigger.Label>Settings</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
