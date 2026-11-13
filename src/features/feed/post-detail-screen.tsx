import { Stack, useLocalSearchParams } from 'expo-router';
import * as React from 'react';

import {
  ActivityIndicator,
  FocusAwareStatusBar,
  SafeAreaView,
  Text,
} from '@/components/ui';
import { usePost } from './api';

export function PostDetailScreen() {
  const local = useLocalSearchParams<{ id: string }>();

  const { data, isPending, isError } = usePost({
    variables: { id: local.id },
  });

  if (isPending) {
    return (
      <SafeAreaView edges={['left', 'right']} className="flex-1 justify-center p-3">
        <Stack.Screen options={{ title: 'Post', headerBackTitle: 'Feed' }} />
        <FocusAwareStatusBar />
        <ActivityIndicator />
      </SafeAreaView>
    );
  }
  if (isError) {
    return (
      <SafeAreaView edges={['left', 'right']} className="flex-1 justify-center p-3">
        <Stack.Screen options={{ title: 'Post', headerBackTitle: 'Feed' }} />
        <FocusAwareStatusBar />
        <Text className="text-center">Error loading post</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView edges={['left', 'right']} className="flex-1 p-3">
      <Stack.Screen options={{ title: 'Post', headerBackTitle: 'Feed' }} />
      <FocusAwareStatusBar />
      <Text className="text-xl">{data.title}</Text>
      <Text>
        {data.body}
        {' '}
      </Text>
    </SafeAreaView>
  );
}
