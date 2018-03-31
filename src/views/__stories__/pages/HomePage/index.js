import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import {Provider} from '../../utils/'

import HomePage from '../../../pages/home'


export default () => storiesOf('HomePage', module)
.addDecorator(story => <Provider story={story()} />)

    .add('loaded homepage example', () => <HomePage></HomePage>)

