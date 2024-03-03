import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const initialState = {
  contacts: []
}

const contactSlice = createSlice({
  initialState,
  name: 'contacts',
  reducers: {
    createContact: (state, { payload }) => {
      state.contacts.push({ ...payload, isFavourite: false, id: uuidv4() })
    },
    deleteContacts: (state, { payload }) => {
      state.contacts = state.contacts.filter(c => c.id !== payload)
    },
    updateContact: (state, { payload: { id, data } }) => {
      const updatedContactIndex = state.contacts.findIndex(c => c.id === id)
      state.contacts[updatedContactIndex] = {
        ...state.contacts[updatedContactIndex],
        ...data
      }
    }
  }
})

const { reducer, actions } = contactSlice

export const { deleteContacts, updateContact, createContact } = actions

export default reducer
