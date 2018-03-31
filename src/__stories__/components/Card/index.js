import React from 'react';
import Card from './Card'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { specs, describe, it } from 'storybook-addon-specifications'
import { mount, configure } from "enzyme";
import expect from "expect";
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

import note from './note.md';



export default (storiesOf) => {

    return storiesOf('Card', module).addDecorator(withKnobs)
        .add('with text without children', () => <Card></Card>)
        .add('with text children', () => <Card disabled={boolean('Disabled', false)} >😀 😎 👍 💯</Card>)
        .add('with click action', () => <Card actions="true" logAction={action()}> {text('Button Text', 'Change in knobs panel')}<br /></Card>
        )
        .add('With Markdown note', withNotes(note)(() => <Card />))
        .add('simple info',
            withInfo({
                source: true,
            })(() => <Card>Click the "?" mark at top-right to view the info.</Card>)
        )
        .add('Hello World', function () {
            const story = <button onClick={action('Hello World')}>
                    Hello World
              </button>;

            specs(() => describe('Hello World', function () {
                it('Should have the Hello World label', function () {
                    let output = mount(story);
                    expect(output.text()).toContain('Hello World');
                });
            }));

            return story;
        })
}
