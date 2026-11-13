import { Stack } from 'expo-router';
import * as React from 'react';

export default function StyleLayout() {
  return (
    <Stack>
      <Stack.Screen name="style" options={{ headerShown: false }} />
    </Stack>
  );
}
