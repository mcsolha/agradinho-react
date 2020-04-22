import React from 'react';
import PropTypes from 'prop-types';

function BaseInput({
  label, type, onChange, value,
}) {
  const inputName = label.toLowerCase();

  return (
    <div className="base-input">
      <label htmlFor={inputName}>{label}</label>
      <input
        type={type}
        name={inputName}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

BaseInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

BaseInput.defaultProps = {
  onChange: () => {},
  value: '',
};

export default BaseInput;
