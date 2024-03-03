import { Formik, Form } from 'formik'
import Input from './Input'
import { USER_CONTACTS_VALIDATION_SCHEMA } from '../../../utils/validationSchema'
import styles from './ContactsForm.module.scss'
function ContactsForm () {
  const initialValues = {
    userName: '',
    phoneNumber: '',
    email: '',
    birthday: ''
  }
  const handlerSubmit = (values, formikBag) => {
    formikBag.resetForm()
  }
  const classes = {
    error: styles.error,
    input: styles.input,
    valid: styles.valid,
    invalid: styles.invalid
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handlerSubmit}
      validationSchema={USER_CONTACTS_VALIDATION_SCHEMA}
    >
      <Form className={styles.form}>
        <Input
          name='userName'
          label='Name:'
          type='text'
          placeholder='your name'
          autoFocus
          classes={classes}
        />
        <Input
          name='phoneNumber'
          label='Phone:'
          type='text'
          placeholder='+380663883724'
          classes={classes}
        />
        <Input
          name='email'
          label='Email:'
          type='email'
          placeholder='email@mail.com'
          classes={classes}
        />
        <Input
          name='birthday'
          label='Birthday:'
          type='date'
          classes={classes}
        />
        <button type='submit'>Add</button>
      </Form>
    </Formik>
  )
}

export default ContactsForm
