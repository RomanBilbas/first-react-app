import React from 'react'

function NewsItem ({ news: { title, body } }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{body}</p>
    </>
  )
}

export default NewsItem
