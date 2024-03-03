import { connect } from 'react-redux'
import { deleteContacts, updateContact } from '../../store/slices/contactsSlice'

function ContactsList ({ contacts, deleteContactById, updateContactById }) {
  const changeIsFavotite = (id, checked) =>
    updateContactById(id, { isFavourite: checked })
  return (
    <ul>
      {contacts.map(c => (
        <li key={c.id}>
          <label>
            <input
              type='checkbox'
              checked={c.isFavourite}
              onChange={({ target: { checked } }) =>
                changeIsFavotite(c.id, checked)
              }
            />{' '}
            {c.fullName}
            {c.phoneNumber}
          </label>

          <button onClick={() => deleteContactById(c.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

const mapStateToProps = ({ contactsList }) => contactsList

const mapDispatchToProps = dispatch => ({
  deleteContactById: id => dispatch(deleteContacts(id)),
  updateContactById: (id, data) => dispatch(updateContact({ id, data }))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList)
