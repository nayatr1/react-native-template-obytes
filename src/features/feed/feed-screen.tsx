import type { Post } from './api';
import { FlashList } from '@shopify/flash-list';

import * as React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  EmptyList,
  FocusAwareStatusBar,
  SafeAreaView,
  Text,
  View,
} from '@/components/ui';
import { usePosts } from './api';
import { PostCard } from './components/post-card';

export function FeedScreen() {
  const { data, isPending, isError } = usePosts();
  const insets = useSafeAreaInsets();
  const renderItem = React.useCallback(
    ({ item }: { item: Post }) => <PostCard {...item} />,
    [],
  );

  if (isError) {
    return (
      <SafeAreaView edges={['left', 'right']} className="flex-1">
        <Text> Error Loading data </Text>
      </SafeAreaView>
    );
  }
  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
      <FlashList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => `item-${index}`}
        ListEmptyComponent={<EmptyList isLoading={isPending} />}
        contentInsetAdjustmentBehavior="automatic"
        // Keep cards clear of the vertical rail (up to 84pt on either edge).
        contentContainerStyle={{
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }}
        testID="feed-list"
      />
    </View>
  );
}
