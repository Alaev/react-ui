import { configure } from '@storybook/react';

// automatically import all files ending in *.story.js
const req = require.context('../src/views/', true, /.story.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
