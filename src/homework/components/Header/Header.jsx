import IconsRigth from './IconsRigth/iconsRigth'
import NavHeader from './NavHeader/NavHeader'
import style from './Header.module.css'

function HeaderPage () {
  return (
    <div className={style.Header}>
      <NavHeader />
      <IconsRigth />
    </div>
  )
}

export default HeaderPage
