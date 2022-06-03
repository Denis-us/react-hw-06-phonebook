import { useDispatch, useSelector } from 'react-redux';
import {changeFilter} from '../../redux/reduxSlice'
// import { connect } from "react-redux";
import styles from "./Filter.module.css";
// import contactsActions from "../../redux/contacts/contacts-actions";

const Filter = () => {
  const filter = useSelector(state => state.filter.filter)
  const dispatch = useDispatch()

  return (
    <label>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      ></input>
    </label>
  );
};

// const mapStateToProps = state => ({
//   value: state.contacts.filter
// })

// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(contactsActions.changeFilter(e.target.value))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
export default Filter