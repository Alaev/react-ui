import React from 'react';
import { TableContext } from '../../../../context/table';

const styles = {
  textAlign: 'center'
};

const CheckboxCel = props => {
  const { info, data } = props;
  const { type, value } = data;
  return (
    <td style={styles}>
      <TableContext.Consumer>{({ actions }) => <input type={type} checked={value} name={info} onChange={actions.handelCheckboxInteraction} />}</TableContext.Consumer>
    </td>
  );
};

export default CheckboxCel;
