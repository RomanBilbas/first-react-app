import user from './user.png'
import logo from './logo.avif'
import styles from './header.module.css'
function Header ({ isLogin, navList }) {
  const mapLinks = (link, i) => (
    <li key={i}>
      <a href={link.src}>{link.aTitle}</a>
    </li>
  )
  return (
    <header className={styles.container}>
      <img className={styles.logo} src={logo} alt='logo' />
      <ul className={styles.linksList}>{navList.map(mapLinks)}</ul>
      {isLogin ? (
        <img className={styles.userImg} src={user} alt='user' />
      ) : (
        <div>
          <button>Login</button>
          <button>Registration</button>
        </div>
      )}
    </header>
  )
}

export default Header
