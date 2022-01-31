import Link from 'next/link'
import styles from '../styles/Footer_g.module.css'

export default function Footer_g(props) {

  return (
    <footer className={styles.footer}>
      <div className={styles.footer1}>
        <section>
          <Link href="/">
            <a className={styles.footer1_left}>
              <img src="/common_img/logoG.png" width="140" height="auto"/><br></br>
              ダイレクト転職サービス<br></br>
              <img src="/common_img/logo_musubi_G.png" width="120" height="auto"/><br></br>
              for介護<br></br>
            </a>
          </Link>
          <div className={styles.footer1_right}>
            <ul>
              <li key="1"><a href="#">最新記事見出し</a></li>
              <li key="2"><a href="#">最新記事見出し</a></li>
              <li key="3"><a href="#">最新記事見出し</a></li>
            </ul>
            <ul>
              <li key="4"><a href="#">最新記事見出し</a></li>
              <li key="5"><a href="#">最新記事見出し</a></li>
              <li key="6"><a href="#">最新記事見出し</a></li>
            </ul>
          </div>
        </section>
      </div>
      <div className={styles.footer2}>
        <section>
          <div className={styles.bunner_area}> 
          </div>
          <div className={styles.link_area}>
            <a href="#">プライバシポリシー</a>　｜　<a href="#">会員規約</a>
          </div>
          <div className={styles.snsicon_area}>
            <a href="#"><img src="/common_img/snsicon_twitter.svg" width="20" height="auto"/></a>
            <a href="#"><img src="/common_img/snsicon_insta.svg" width="20" height="auto"/></a>
            <a href="#"><img src="/common_img/snsicon_fb.svg" width="20" height="auto"/></a>
          </div>
          <a href="#">mauvellc.com</a>
        </section>
      </div>
    </footer>
  )

}