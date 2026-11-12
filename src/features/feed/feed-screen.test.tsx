import type { Post } from './api';
import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { render, screen } from '@/lib/test-utils';
import { usePosts } from './api';
import { FeedScreen } from './feed-screen';

jest.mock('expo-router', () => ({
  // eslint-disable-next-line react/no-unnecessary-use-prefix
  useIsFocused: () => true,
  Link: ({ children }: { children: React.ReactNode }) => children,
}));

jest.mock('./api', () => ({
  usePosts: jest.fn(),
}));

jest.mock('./components/post-card', () => ({
  PostCard: ({ title }: Post) => {
    const { Text } = require('react-native');
    return <Text>{title}</Text>;
  },
}));

const usePostsMock = usePosts as unknown as jest.Mock;

const posts: Post[] = [
  { userId: 1, id: 1, title: 'First post', body: 'Hello world' },
];

const frame = { x: 0, y: 0, width: 1000, height: 800 };

function renderWithInsets(insets: {
  top: number;
  left: number;
  right: number;
  bottom: number;
}) {
  return render(
    <SafeAreaProvider initialMetrics={{ frame, insets }}>
      <FeedScreen />
    </SafeAreaProvider>,
  );
}

afterEach(() => {
  jest.clearAllMocks();
});

describe('feedScreen safe areas', () => {
  it('renders the posts', async () => {
    usePostsMock.mockReturnValue({ data: posts, isPending: false, isError: false });
    await renderWithInsets({ top: 0, left: 0, right: 0, bottom: 0 });
    expect(await screen.findByText('First post')).toBeOnTheScreen();
  });

  it('keeps list content clear of a left vertical rail', async () => {
    usePostsMock.mockReturnValue({ data: posts, isPending: false, isError: false });
    await renderWithInsets({ top: 0, left: 84, right: 0, bottom: 0 });
    const list = await screen.findByTestId('feed-list');
    expect(list.props.contentContainerStyle).toEqual({
      paddingLeft: 84,
      paddingRight: 0,
    });
  });

  it('keeps list content clear of a right vertical rail', async () => {
    usePostsMock.mockReturnValue({ data: posts, isPending: false, isError: false });
    await renderWithInsets({ top: 0, left: 0, right: 84, bottom: 0 });
    const list = await screen.findByTestId('feed-list');
    expect(list.props.contentContainerStyle).toEqual({
      paddingLeft: 0,
      paddingRight: 84,
    });
  });
});
