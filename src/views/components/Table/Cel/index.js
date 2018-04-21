import React from 'react';
import CheckboxCel from './CheckboxCel';

const Cel = ({ data, info }) => {
  switch (data.type) {
    case 'checkbox':
      return <CheckboxCel data={data} info={info} />;
    case 'radio':
      return <td>radio cell that support grouping</td>;

    default:
      return <td>{data}</td>;
  }
};

export default Cel;
