import React from 'react';
import styles from '../style.js';

const Input = ({ item, disabled }) => {
  return (
    <div className="mb-4 grid md:grid-cols-2">
      <label className={`${styles.labelClasses}`}>{`${item.label}`}</label>
      <input
        type="text"
        className={`${styles.inputClasses} ${disabled ? 'bg-green-50' : ''}`}
        placeholder={`${item.placeholder}`}
        disabled={disabled}
        required
      />
    </div>
  );
};

export default Input;
