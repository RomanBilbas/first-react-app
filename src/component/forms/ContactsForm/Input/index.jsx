import { Field } from 'formik'
import classNames from 'classnames'

function Input ({ name, label, classes, ...restProps }) {
  return (
    <Field name={name}>
      {({ field, form, meta }) => {
        const inputClassNames = classNames(classes.input, {
          [classes.valid]: meta.touched && !meta.error,
          [classes.invalid]: meta.touched && meta.error
        })
        return (
          <>
            <label>
              <span>{label}</span>
              <input className={inputClassNames} {...field} {...restProps} />
              {meta.touched && meta.error && (
                <span className={classes.error}>{meta.error}</span>
              )}
            </label>
          </>
        )
      }}
    </Field>
  )
}

export default Input
