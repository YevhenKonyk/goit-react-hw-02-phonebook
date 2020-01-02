import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactFilter.module.css';

const ContactFilter = ({ value, onChangeFilter }) => (
  <div className={styles.search}>
    <label htmlFor="" className={styles.label}>
      Search by name
    </label>
    <input
      type="text"
      name="filter"
      value={value}
      placeholder="Enter contact name"
      onChange={onChangeFilter}
      id=""
      className={styles.input}
      required
    />
  </div>
);

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default ContactFilter;
