import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';

import { Table } from "../../../components/Table";
const HomePageStory =  storiesOf('HomePage', module)
    .add('Table component', () => <Table />);

export default HomePageStory