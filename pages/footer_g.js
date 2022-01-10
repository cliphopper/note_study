import styles from '../styles/Footer_g.module.css'

export default function FooterG(props) {

  return (
    <footer className={styles.footer}>
      <div className={styles.footer1}>
        <section>
          <div className={styles.footer1_left}>
            <a href="#">
              <img src="/logoG.png" width="140" height="auto"/><br></br>
              ダイレクト転職サービス<br></br>
              <img src="/logo_musubi_G.png" width="120" height="auto"/><br></br>
              for介護<br></br>
            </a>
          </div>
          <div className={styles.footer1_right}>
            <ul>
              <li><a href="#">最新記事見出し</a></li>
              <li><a href="#">最新記事見出し</a></li>
              <li><a href="#">最新記事見出し</a></li>
            </ul>
            <ul>
              <li><a href="#">最新記事見出し</a></li>
              <li><a href="#">最新記事見出し</a></li>
              <li><a href="#">最新記事見出し</a></li>
            </ul>
          </div>
        </section>
      </div>
      <div className={styles.footer2}>
        <section>
          <div className={styles.bunner_area}> 
          </div>
          <div className={styles.snsicon_area}>
            <a href="#"><img src="/snsicon_twitter.svg" width="20" height="auto"/></a>
            <a href="#"><img src="/snsicon_insta.svg" width="20" height="auto"/></a>
            <a href="#"><img src="/snsicon_fb.svg" width="20" height="auto"/></a>
          </div>
          <a href="#">mauvellc.com</a>
        </section>
      </div>
    </footer>
  )

}