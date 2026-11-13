import * as React from 'react';

import { FocusAwareStatusBar, SafeAreaView, ScrollView } from '@/components/ui';
import { Buttons } from './components/buttons-demo';
import { Colors } from './components/colors-demo';
import { Inputs } from './components/inputs-demo';
import { Typography } from './components/typography-demo';

export function StyleScreen() {
  return (
    <>
      <FocusAwareStatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <SafeAreaView edges={['left', 'right']} className="flex-1 px-4">
          <Typography />
          <Colors />
          <Buttons />
          <Inputs />
        </SafeAreaView>
      </ScrollView>
    </>
  );
}
