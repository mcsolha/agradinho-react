import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import { camelize } from '../js/helpers';
import Icon from './Icon';
import '../style/BaseInput.scss';

function BaseInput({
  label, type, onChange, value, placeholder, disabled, showLabel, leftIcons, rightIcons,
}) {
  const inputName = camelize(label);
  const labelEl = showLabel && (<label className="label" htmlFor={inputName}>{label}</label>);

  const leftIconsEls = !leftIcons.length
    ? undefined
    : leftIcons.map((icon) => (
      <Icon
        key={uuid()}
        className="is-small is-left"
        icon={icon}
      />
    ));

  const rightIconsEls = !rightIcons.length
    ? undefined
    : rightIcons.map((icon) => (
      <Icon
        key={uuid()}
        className="is-small is-right"
        icon={icon}
      />
    ));

  const controlClass = (rightIconsEls ? 'has-icons-right' : '')
    + (leftIconsEls ? 'has-icons-left' : '');

  return (
    <div className="field base-input">
      <p className={`control ${controlClass}`}>
        { labelEl }
        <input
          className="input is-dark"
          type={type}
          name={inputName}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
        />
        { leftIconsEls }
        { rightIconsEls }
      </p>
      {/* <div className="control">
      </div> */}
    </div>
  );
}

BaseInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  showLabel: PropTypes.bool,
  leftIcons: PropTypes.arrayOf(PropTypes.string),
  rightIcons: PropTypes.arrayOf(PropTypes.string),
};

BaseInput.defaultProps = {
  onChange: () => {},
  value: '',
  placeholder: '',
  disabled: false,
  showLabel: false,
  leftIcons: [],
  rightIcons: [],
};

export default BaseInput;
