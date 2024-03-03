import { useState } from 'react'
import classNames from 'classnames'
import styles from './LoginForm.module.css'

const LOGIN_FORM_REG_EXP = {
  login: /^.+@.+$/,
  password: /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!#%._].*).{8,16}$/
}

function LoginForm () {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const handleLoginChange = ({ target: { value } }) => {
    setLogin(value)
  }
  const handlePasswordChange = ({ target: { value } }) => {
    setPassword(value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    setLogin('')
    setPassword('')
  }
  const loginClassNames = classNames(styles.formInput, {
    [styles.valid]: LOGIN_FORM_REG_EXP.login.test(login),
    [styles.invalid]: !LOGIN_FORM_REG_EXP.login.test(login)
  })
  const passwordClassName = classNames(styles.formInput, {
    [styles.valid]: LOGIN_FORM_REG_EXP.password.test(password),
    [styles.invalid]: !LOGIN_FORM_REG_EXP.password.test(password)
  })

  // const loginClassNames = `${styles.formInput} ${
  //   LOGIN_FORM_REG_EXP.login.test(login) ? styles.valid : styles.invalid
  // }`
  // const passwordClassName = `${styles.formInput} ${
  //   LOGIN_FORM_REG_EXP.password.test(password) ? styles.valid : styles.invalid
  // }`

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Login Form</h2>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <label className={styles.formLabel}>
          <span className={styles.labelCaption}>Login</span>
          <input
            className={loginClassNames}
            type='email'
            name='login'
            value={login}
            onChange={handleLoginChange}
            placeholder='your@gmail'
            autoFocus
          />
        </label>
        <label className={styles.formLabel}>
          <span className={styles.labelCaption}>Password</span>
          <input
            className={passwordClassName}
            type='password'
            name='password'
            placeholder='your password'
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button className={styles.loginBtn} type='submit'>
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm
