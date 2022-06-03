import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {addContact} from '../../redux/reduxSlice'
import Input from "../Input/Input";
import styles from "./Form.module.css";


const Form = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();
  const dispatch = useDispatch()

  const onSubmit = data => dispatch(addContact(data))

    return (
      // <form onSubmit={handleSubmit} className={styles.form}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <input {...register("name", { required: true })} />
      {errors.name?.type === 'required' && "Name is required"}
      
      <input {...register("number", { required: true })} />
      {errors.number && "Number is required"}
      
      <button type="submit">Submit</button>
      </form>
        /* <label className={styles.label}>Name</label>
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
      </form> */
    );
  }

export default Form
