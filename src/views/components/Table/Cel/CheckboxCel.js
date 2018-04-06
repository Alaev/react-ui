import React from 'react';
import { TableContext } from '../../Table';

const styles = {
  textAlign: 'center'
};

const CheckboxCel = props => {
  const { info, data } = props;
  const { type, value } = data;
  return (
    <td style={styles}>
      <TableContext.Consumer>{contex => <input type={type} checked={value} name={info} onChange={contex.handelCheckboxInteraction} />}</TableContext.Consumer>
    </td>
  );
};

export default CheckboxCel;
