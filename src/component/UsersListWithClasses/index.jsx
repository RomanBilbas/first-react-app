import React, { Component } from 'react'

class UsersListWithClasses extends Component {
  constructor (props) {
    super(props)

    this.state = {
      users: [],
      isFeatching: false,
      error: null,
      currentPage: 1
    }
  }
  load = currentPage => {
    this.setState({ isFeatching: true })
    fetch(`https://randomuser.me/api/?page=${currentPage}&results=5&seed=abc`)
      .then(response => response.json())
      .then(({ results }) => this.setState({ users: results }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isFeatching: false }))
  }
  componentDidMount () {
    const { currentPage } = this.state
    this.load(currentPage)
  }
  componentDidUpdate (prevProps, prevState) {
    const { currentPage: prevPage } = prevState
    const { currentPage } = this.state
    if (prevPage !== currentPage) this.load(currentPage)
  }

  nextPage = () => {
    const { currentPage } = this.state
    this.setState({ currentPage: currentPage + 1 })
  }
  prevPage = () => {
    const { currentPage } = this.state
    this.setState({ currentPage: currentPage - 1 })
  }

  render () {
    const { users, isFeatching, error, currentPage } = this.state
    return (
      <>
        <button onClick={this.prevPage}>{'<'}</button>
        {currentPage}
        <button onClick={this.nextPage}>{'>'}</button>
        {isFeatching && <div>LOADING</div>}
        {error && <div>ERROR</div>}
        {!isFeatching && !error && (
          <ul>
            {users.map(u => (
              <li key={u.login.uuid}>{JSON.stringify(u)}</li>
            ))}
          </ul>
        )}
      </>
    )
  }
}
export default UsersListWithClasses
