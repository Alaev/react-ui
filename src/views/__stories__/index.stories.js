import React from 'react';

import { storiesOf,addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import {  Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('AddOn example')} />);


// // Components Stories
const Card = require('./components/Card');

// // Pages Stories
const HomePageStory = require('./pages/HomePage');