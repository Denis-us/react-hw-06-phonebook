import { useSelector, useDispatch } from "react-redux";
import {deleteContact} from '../../redux/reduxSlice'
import styles from "./ContactList.module.css";


  const ContactList = () => {

  const contacts = useSelector(state => state.contacts.contacts)
  const filter = useSelector(state => state.filter.filter)

  const dispatch = useDispatch()

  const filteredContacts = (contacts, filter) => {
    return contacts.filter(contact => (
    contact.name.toLowerCase().includes(filter.toLowerCase())))
  }

  const filterContacts = filteredContacts(contacts, filter);

  return (
    <ul className={styles.contactsList}>
      {filterContacts.map(({ id, name, number }) => (
        <li key={id} className={styles.contactsElement}>
          <p className={styles.contactsData}>
            {name}: {number}
          </p>
          <button
            className={styles.btn}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList