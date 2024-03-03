import { IoIosSearch } from 'react-icons/io'
import { RiAccountCircleLine } from 'react-icons/ri'
import { MdLocalPhone } from 'react-icons/md'
import { FaHeart } from 'react-icons/fa'
import style from './IconsHeader.module.css'
function IconsRigth () {
  return (
    <div className={style.Icons}>
      <IoIosSearch />
      <RiAccountCircleLine />
      <MdLocalPhone />
      <FaHeart />
    </div>
  )
}

export default IconsRigth
