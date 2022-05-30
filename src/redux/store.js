import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import {logger} from 'redux-logger'
import contactsReducer from '../redux/contacts/contacts-reducer'

console.log(getDefaultMiddleware())

const middleware = [...getDefaultMiddleware(), logger]

const store = configureStore({
    reducer: {
        contacts: contactsReducer
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development'
})

export default store