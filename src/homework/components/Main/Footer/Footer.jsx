import style from './Footer.module.css'

function Footer () {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.footerRow}>
          <div>
            <div className={style.footerTools}>
              <h3>Services</h3>
            </div>
          </div>
          <div>
            <div className={style.footerTools}>
              <h3>Tools</h3>
            </div>
          </div>
          <div>
            <div className={style.footerTools}>
              <h3>Sellers</h3>
            </div>
            <div className={style.footerTools}>
              <h3>Creatives</h3>
            </div>
          </div>
          <div>
            <div>
              <div className={style.footerTools}>
                <h3>SquadHelp</h3>
              </div>
              <div className={style.footerTools}>
                <h3>Legal</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
