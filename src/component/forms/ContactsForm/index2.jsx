import { Formik, Form, Field, ErrorMessage } from 'formik'
import classNames from 'classnames'
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
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handlerSubmit}
      validationSchema={USER_CONTACTS_VALIDATION_SCHEMA}
    >
      {formikProps => {
        const userNameClassNames = classNames(styles.input, {
          [styles.valid]:
            formikProps.touched.userName && !formikProps.errors.userName,
          [styles.invalid]:
            formikProps.touched.userName && formikProps.errors.userName
        })
        return (
          <Form className={styles.form}>
            <label>
              <span>Name:</span>
              <Field
                className={userNameClassNames}
                type='text'
                name='userName'
                placeholder='your name'
                autoFocus
              />
              <ErrorMessage
                name='userName'
                className={styles.error}
                component='span'
              />
            </label>
            <label>
              <span>Phone</span>
              <Field
                className={styles.input}
                type='text'
                name='phoneNumber'
                placeholder='+380663883724'
              />
              <ErrorMessage
                name='phoneNumber'
                className={styles.error}
                component='span'
              />
            </label>
            <label htmlFor=''>
              <span>Email:</span>
              <Field
                className={styles.input}
                type='email'
                name='email'
                placeholder='email@mail.com'
              />
              <ErrorMessage
                name='email'
                className={styles.error}
                component='span'
              />
            </label>
            <label>
              <span>Birthday:</span>
              <Field className={styles.input} type='date' name='birthday' />
              <ErrorMessage
                name='birthday'
                className={styles.error}
                component='span'
              />
            </label>

            <button type='submit'>Add</button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default ContactsForm
