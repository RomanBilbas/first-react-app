import style from './Need.module.css'
import NameForSale from './NamesForSale.svg'
import LaunchACompetition from './LaunchACompetition.svg'
function NeedMoreRecomendation () {
  return (
    <section className={style.recomendation}>
      <div className={style.recomendationContainer}>
        <div className={style.recomendationTitle}>
          <h2>Need More Recommendations</h2>
          <p>Two options to find an awesome name</p>
        </div>

        <div className={style.recomendationInfo}>
          <div className={style.recomendationCard}>
            <div className={style.recomendationCard_logo}>
              <img src={NameForSale} alt='logo' />
            </div>

            <div className={style.recomendationCard_title}>
              <h3>Name For Sale</h3>
              <p>
                Explore curated collection of premium brand names for sale with
                a matching URL.
              </p>
            </div>

            <div className={style.recomendationCard_button}>
              <a>
                <span>View All Names For Sale</span>
              </a>
            </div>
          </div>

          <div className={style.recomendationCard}>
            <div className={style.recomendationCard_logo}>
              <img src={LaunchACompetition} alt='logo' />
            </div>

            <div className={style.recomendationCard_title}>
              <h3>Launch A Competition</h3>
              <p>
                Get custom name ideas from hundreds of naming experts in real
                time
              </p>
            </div>

            <div className={style.recomendationCard_button}>
              <a>
                <span>View All Names For Sale</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NeedMoreRecomendation
