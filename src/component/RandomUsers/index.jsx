import { useEffect, useState } from 'react'
import { FaSpinner } from 'react-icons/fa6'
import { loadUsers } from '../../api'
import styles from './RandomUsers.module.scss'

function RandomUsers () {
  const [users, setUsers] = useState([])
  const [isFeatching, setIsFeatching] = useState(false)
  const [error, setError] = useState(null)
  const [results, setResults] = useState(10)
  const [page, setPage] = useState(1)

  const mapUsers = users.map(u => (
    <li key={u.login.uuid}>
      <div>hello, {u.name.first}</div>
      <img src={u.picture.large} alt='' />
      <p>
        {u.name.first} {u.name.last}
      </p>
      <p>{u.dob.age}</p>
      <button onClick={() => deleteUser(u.login.uuid)}>Delete</button>
    </li>
  ))
  const deleteUser = uuid => {
    const updateUsers = users.filter(u => u.login.uuid !== uuid)
    setUsers(updateUsers)
  }

  useEffect(() => {
    setIsFeatching(true)
    setError(null)
    loadUsers({ results, page })
      .then(data => setUsers(data.results))
      .catch(err => setError(err))
      .finally(() => setIsFeatching(false))
  }, [results, page])
  const handleResultChange = ({ target: { value } }) => setResults(value)
  const prev = () => {
    setPage(page === 1 ? 1 : page - 1)
  }
  const next = () => {
    setPage(page + 1)
  }
  return (
    <>
      <section>
        <label htmlFor=''>
          Results on page:
          <input
            type='number'
            value={results}
            onChange={handleResultChange}
            min='1'
            max='20'
          />
        </label>
        <button onClick={prev}>{'<'}</button>
        <button onClick={next}>{'>'}</button>
      </section>
      {isFeatching && <FaSpinner />}
      {error && <div style={{ color: 'red' }}>!!!ERROR!!!</div>}
      <ul className={styles.usersList}>{!isFeatching && !error && mapUsers}</ul>
    </>
  )
}

export default RandomUsers
