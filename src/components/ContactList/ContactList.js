import React from "react";
import { connect } from "react-redux";
import styles from "./ContactList.module.css";
import contactsActions from "../../redux/contacts/contacts-actions";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.contactsList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.contactsElement}>
          <p className={styles.contactsData}>
            {name}: {number}
          </p>
          <button
            className={styles.btn}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter))
};

const mapStateToProps = ({contacts: {items, filter}}) => ({
  contacts: getVisibleContacts(items, filter)
})

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsActions.deleteContact(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
