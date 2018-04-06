import React from 'react';
import * as _isObject from 'lodash/isObject';
import CheckboxCel from './CheckboxCel';

const Cel = ({ data, info }) => {
  if (_isObject(data) && data.type === "checkbox" ) {
    return <CheckboxCel data={data} info={info} />;
  }
  return <td>{data}</td>;
};

export default Cel;
