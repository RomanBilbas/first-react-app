import ContactForm from '../../redux/ContactForm'
import ContactsList from '../../redux/ContactsList'

function ContactsPage () {
  return (
    <main>
      <h2>Contacts</h2>
      <ContactForm />
      <ContactsList />
    </main>
  )
}

export default ContactsPage
