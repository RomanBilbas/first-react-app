import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa'
import { RxLinkedinLogo } from 'react-icons/rx'
import footer from './approved-footer-2.svg'

import style from './SocialNetwork.module.css'
function SocialNetwork () {
  return (
    <section className={style.SocialNetwork}>
      <div className={style.SocialNetworkContainer}>
        <div className={style.SocialNetworkFlex}>
          <div className={style.allRight}>Copyright © 2024 Squadhelp LLC</div>
          <div className={style.approved}>
            <img src={footer} />
            <div>
              <p>4.9/5</p>
              <span>based on 2782 ratings</span>
            </div>
          </div>

          <div className={style.social}>
            <a>
              <FaFacebookSquare />
            </a>
            <a>
              <FaTwitter />
            </a>
            <a>
              <FaInstagram />
            </a>
            <a>
              <RxLinkedinLogo />
            </a>
            <a>
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialNetwork
