import React from 'react';
import Card from './Card'

import { action } from '@storybook/addon-actions';


export default (storiesOf) => (
    storiesOf('Card', module)
        .add('with text without childern', () => <Card></Card>)
        .add('with text children', () => <Card >😀 😎 👍 💯</Card>)
        .add('with click action', () => <Card actions="true" logAction={action()}>Add and Subtract button<br/></Card>
        ))