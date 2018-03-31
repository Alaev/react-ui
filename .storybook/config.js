import { configure } from '@storybook/react';

function loadStories() {
  require('../src/views/__stories__');
}

configure(loadStories, module);
