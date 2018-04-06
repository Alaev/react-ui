import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import Table, { TableContext } from '../../../../views/components/Table';
import 'bulma/css/bulma.css';

console.log(TableContext);

const TableComponentStory = storiesOf('Table component story', module).add('With Data', () => <Table />);
