import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { Provider } from '../../utils/'

import HomePage from '../../../pages/home'



const HomePageStory =  storiesOf('HomePage', module)
    .addDecorator(story => <Provider story={story()} />)
    .add('loaded homepage example', () => <HomePage />);


export default HomePageStory