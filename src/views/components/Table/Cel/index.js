import React from 'react';
import _ from 'lodash';
import CheckboxCel from './CheckboxCel';

const Cel = ({ data, info }) => {
  if (_.isObject(data) && data.type === "checkbox" ) {
    return <CheckboxCel data={data} info={info} />;
  }
  return <td>{data}</td>;
};

export default Cel;
