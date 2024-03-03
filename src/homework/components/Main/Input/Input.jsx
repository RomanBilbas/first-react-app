import { FaLongArrowAltRight } from 'react-icons/fa'
import styles from './Input.module.css'

function Input () {
  return (
    <section className={styles.inputSection}>
      <div className={styles.inputConteiner}>
        <div className={styles.inputForm}>
          <div className={styles.inputIcon}></div>
          <input
            className={styles.input}
            type='text'
            placeholder='Search over 200,000 names'
          />
          <button className={styles.inputButton}>
            <span>
              <FaLongArrowAltRight />
            </span>
          </button>
          <div className={styles.listTags}>
            <span>Popular searches</span>
            <a href='#'>Tech</a>
            <a href='#'>Clothing</a>
            <a href='#'>Finance</a>
            <a href='#'>Real Estate</a>
            <a href='#'>Crypto</a>
            <a href='#'>Short</a>
            <a href='#'>One Word</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Input
