import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ handleChange, label, name, type, value, required }) => {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={handleChange}
        name={name}
        type={type}
        value={value}
        required={required}
      />
      {label ? (
        <label className={`${value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
