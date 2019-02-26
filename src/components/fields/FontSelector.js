import Dropdown from './Dropdown';
import React from 'react';
import PropTypes from 'prop-types';

const FontSelector = (props, context) => (
  <Dropdown
    {...props}
    options={context.fontOptions.map(({value, label}) => ({
      label: <span style={{fontFamily: value}}>{label}</span>,
      value,
    }))}
    clearable={true}
  />
);

FontSelector.propTypes = {
  ...Dropdown.propTypes,
};

FontSelector.contextTypes = {
  fontOptions: PropTypes.array,
};

export default FontSelector;
