import React from 'react';
import { setAddon, storiesOf, addDecorator } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { specs, describe, it } from 'storybook-addon-specifications';
import { mount, configure } from 'enzyme';
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';
import JSXAddon from 'storybook-addon-jsx';
import { Button } from '@storybook/react/demo';
import Card from './Card';
import note from './note.md';

setAddon(JSXAddon);
configure({ adapter: new Adapter() });

const Test = ({ fontSize = '16px', fontFamily = 'Arial', align = 'left', color = 'red', children }) => <div style={{ color, fontFamily, fontSize, textAlign: align }}>{children}</div>;

const CardStory = storiesOf('Card AddOn example', module)
  .addDecorator(withKnobs)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)
  .add('with text without children', () => <Card />)
  .add('with text children', () => <Card disabled={boolean('Disabled', false)}>😀 😎 👍 💯</Card>)
  .add('with click action', () => (
    <Card actions="true" logAction={action()}>
      {' '}
      {text('Button Text', 'Change in knobs panel')}
      <br />
    </Card>
  ))
  .add('With Markdown note', withNotes(note)(() => <Card />))
  .add(
    'simple info',
    withInfo({
      source: true
    })(() => <Card>Click the "?" mark at top-right to view the info.</Card>)
  )
  .add('Hello World', function() {
    const story = (
      <div>
        <p>Open Specifications Tab</p>
        <button onClick={action('Hello World')}>Hello World</button>
      </div>
    );

    specs(() =>
      describe('Hello World', function() {
        it('Should have the all the text ', function() {
          let output = mount(story);
          expect(output.text()).toContain('Open Specifications Tab');
          expect(output.text()).toContain('Hello World');
        });
      })
    );

    return story;
  })
  .addWithJSX('Paris', () => (
    <Test fontSize={45} fontFamily="Roboto" align="center" color="#CAF200">
      Hello
    </Test>
  ));
