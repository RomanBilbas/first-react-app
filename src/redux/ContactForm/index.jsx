import { ErrorMessage, Field, Form, Formik } from 'formik'
import { connect } from 'react-redux'
import { CONTACT_VALIDATION_SCHEMA } from '../../utils/validationSchema'
import { createContact } from '../../store/slices/contactsSlice'

function ContactForm ({ createNewContact }) {
  const initialValues = {
    fullName: '',
    phoneNumber: ''
  }
  const submitHandler = (values, { resetForm }) => {
    createNewContact(values)
    resetForm()
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={CONTACT_VALIDATION_SCHEMA}
    >
      <Form>
        <label>
          Name:
          <Field
            name='fullName'
            type='text'
            placeholder='contact name'
            autoFocus
          />
          <ErrorMessage name='fullName' component='span' />
        </label>
        <label>
          Phone:
          <Field name='phoneNumber' type='text' placeholder='+XXXXXXXXXXXXX' />
          <ErrorMessage name='phoneNumber' component='span' />
        </label>
        <button type='submit'>Add</button>
      </Form>
    </Formik>
  )
}
const mapDispatchToProps = dispatch => ({
  createNewContact: data => dispatch(createContact(data))
})

export default connect(null, mapDispatchToProps)(ContactForm)
