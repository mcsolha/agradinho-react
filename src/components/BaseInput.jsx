import React from 'react';
import PropTypes from 'prop-types';
import '../style/BaseInput.scss';

function BaseInput({
  label, type, onChange, value,
}) {
  const inputName = label.toLowerCase();

  return (
    <div className="field base-input">
      <div className="control">
        <label className="label" htmlFor={inputName}>{label}</label>
        <input
          className="input is-dark"
          type={type}
          name={inputName}
          onChange={onChange}
          value={value}
        />
      </div>
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
