import { createAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'


const addContact = createAction('contacts/add', contact => {
    return {
        payload: {
            id: uuidv4(),
            name: contact.name,
            number: contact.number
        }
    }
})
const deleteContact = createAction('contacts/delete')
const changeFilter = createAction('contacts/filter')

export default { addContact, deleteContact, changeFilter }