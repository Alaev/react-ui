import React from 'react';
import Card from './Card'

export default (storiesOf) => (
    storiesOf('Card', module)
        .add('with text without childern', () => <Card></Card>)
        .add('with text children', () => <Card >😀 😎 👍 💯</Card>)
        .add('with click action', () => <Card actions="true">Add and Subtract button<br/></Card>
        ))