import React from "react";
import { connect } from "react-redux";
import styles from "./Filter.module.css";
import contactsActions from "../../redux/contacts/contacts-actions";

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
};

const mapStateToProps = state => ({
  value: state.contacts.filter
})

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.changeFilter(e.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);