import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
// at the moment we are only using main.index
const req = require.context("../src/views/__stories__", true , /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);