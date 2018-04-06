import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import Table from '../../../../views/components/Table';
import {TableBody} from '../../../../views/components/Table/TableBody';
import TableProvider from '../../../../context/table';

import 'bulma/css/bulma.css';

const table_body = {
    1: {
      id: 1,
      name: 'javascript 101',
      date: '23-01-2018',
      author: 'Bob',
      publisher: 'web',
      watched: {
        type: 'checkbox',
        value: true
      }
    }
  }

  const table_body2 = {
    1: {
      id: 1,
      name: 'javascript 101',
      date: '23-01-2018',
      author: 'Bob',
      publisher: 'web',
      watched: {
        type: 'checkbox',
        value: false
      }
    }
  }

const TableComponentStory = storiesOf('Table Components', module)
.add('Table with Context', () => <Table Provider={TableProvider} />)
.add('TableBody checked', () => <table className="table is-bordered is-fullwidth"><TableBody tableRows={table_body} /></table>)
.add('TableBody not checked', () => <table className="table is-bordered is-fullwidth"><TableBody tableRows={table_body2} /></table>);
