import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import Table from './index.js';
import TableProvider from '../../../context/table';
import JSXAddon from 'storybook-addon-jsx';
import { withInfo } from '@storybook/addon-info';

import 'bulma/css/bulma.css';

const TableV2ComponentStory = storiesOf('Table v2 Components', module).add(
  'React table component with context setup',
  withInfo(
    `
    Usage:
    ~~~js
    <Table Provider={TableProvider} />
      ~~~
    `,
  )(() => <Table Provider={TableProvider} />),
);
