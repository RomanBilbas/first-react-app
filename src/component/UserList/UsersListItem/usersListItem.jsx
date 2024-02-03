import React from 'react'
import { FaTrash } from 'react-icons/fa6'
function UsersListItem ({ user: u, index, removeUser }) {
  return (
    <li>
      <img
        width='50px'
        height='50px'
        src={u.photoSrc}
        alt={`${u.firstName} ${u.lastName}`}
      />
      <button onClick={() => removeUser(index)}>
        <FaTrash />
      </button>
      <p>
        {u.firstName} {u.lastName}
      </p>
    </li>
  )
}

export default UsersListItem
