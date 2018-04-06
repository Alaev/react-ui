import React from 'react';
import { TableContext } from '../../../../context/table';

const styles = {
  textAlign: 'center'
};

const defaultProps = { handelCheckboxInteraction: () => console.log('handelChange') };

export const CheckboxCel = props => {
  const { info, handelCheckboxInteraction, data: { type, value } } = props;
  return (
    <td style={styles}>
      <input type={type} name={info} defaultChecked={value} onChange={handelCheckboxInteraction} />
    </td>
  );
};

CheckboxCel.defaultProps = {
  handelCheckboxInteraction: () => console.warn('hi did you forget to pass actions?')
};

const ConnectedCheckboxCel = props => {
  return <TableContext.Consumer>{({ actions } = {}) => <CheckboxCel {...props} {...actions} />}</TableContext.Consumer>;
};

export default ConnectedCheckboxCel;
