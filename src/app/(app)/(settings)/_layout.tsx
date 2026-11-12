import { Stack } from 'expo-router';
import * as React from 'react';

export default function SettingsLayout() {
  return (
    <Stack>
      <Stack.Screen name="settings" options={{ headerShown: false }} />
    </Stack>
  );
}
