import React from 'react'
import style from './RecomendationForYou.module.css'
function RecomenationForYou () {
  return (
    <section className={style.sectionForYou}>
      <div className={style.divForYou}>
        <div className={style.containerForYou}>
          <h1 className={style.hForYou}>Recommended For You</h1>
          <p className={style.textForYou}>
            Personalized recommendations based upon your browsing behavior
          </p>
        </div>
      </div>
    </section>
  )
}

export default RecomenationForYou
