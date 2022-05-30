import {useState} from "react"
import {connect} from 'react-redux'
import contactsActions from "../../redux/contacts/contacts-actions";
import Input from "../Input/Input";
import styles from "./Form.module.css";
import { v4 as uuidv4 } from 'uuid'

const Form = ({onSubmit}) => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const id = uuidv4()
    onSubmit({name, number, id});

    reset();
  };

  const reset = () => {
    setName('')
    setNumber('');
  };


    return (
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>Name</label>
        <Input
          type={"text"}
          value={name}
          placeholder={"enter your name"}
          name={"name"}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          handleChange={handleChange}
        />

        <label className={styles.label}>Number</label>
        <Input
          type={"tel"}
          value={number}
          placeholder={"enter your number"}
          name={"number"}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          handleChange={handleChange}
        />

        <button type="submit">Add contact</button>
      </form>
    );
  }

const mapDispatchToProps = dispatch => ({
  onSubmit: (contact) => dispatch(contactsActions.addContact(contact))
})

export default connect(null, mapDispatchToProps)(Form);
