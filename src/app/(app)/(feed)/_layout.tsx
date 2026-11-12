import { Link, Stack } from 'expo-router';
import * as React from 'react';

import { Pressable, Text } from '@/components/ui';

export default function FeedLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Feed',
          headerRight: () => <CreateNewPostLink />,
        }}
      />
    </Stack>
  );
}

function CreateNewPostLink() {
  return (
    <Link href="/feed/add-post" asChild>
      <Pressable>
        <Text className="px-3 text-primary-300">Create</Text>
      </Pressable>
    </Link>
  );
}
