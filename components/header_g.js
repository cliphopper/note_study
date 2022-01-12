import Link from 'next/link'
import styles from '../styles/Header_g.module.css'

export default function Header_g(props) {

  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>
        <Link href="/">
          <a>
            <img src="/logoW.png" />
          </a>
        </Link>
        <div className={styles.logoname}>
          <Link href="/">
            <a>
              ダイレクト転職サービス<br></br>
              <img src="/logo_musubi_W.png" /> for 介護士
            </a>
          </Link>
        </div>
      </h1>
      <div className={styles.headerRight}>
        <Link href="#">
          <a>
            {props.username}
          </a>
        </Link>
        <Link href="#">
          <a>
            <img src="/icon_mypage.svg" />
          </a>
        </Link>
        <img src="/icon_menu.svg" />
      </div>
    </div>
  )

}