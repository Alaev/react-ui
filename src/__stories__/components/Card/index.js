import React from 'react';
import Card from './Card'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';

import note from './note.md';

export default (storiesOf) => (
    storiesOf('Card', module).addDecorator(withKnobs)
        .add('with text without children', () => <Card></Card>)
        .add('with text children', () => <Card disabled={boolean('Disabled', false)} >😀 😎 👍 💯</Card>)
        .add('with click action', () => <Card  actions="true" logAction={action()}> {text('Button Text', 'Change in knobs panel')}<br /></Card>
        )  
        .add('With Markdown note', withNotes(note)(() => <Card/>))

)
