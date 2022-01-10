import styles from '../styles/Header_g.module.css'

export default function HeaderG(props) {

  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>
        <img src="/logoW.png" />
        <div className={styles.logoname}>
          <a href="#">ダイレクト転職サービス<br></br>
          <img src="/logo_musubi_W.png" />
          for 介護士</a>
        </div>
      </h1>
      <div className={styles.headerRight}>
        <a href="#">{props.username}</a>
        <a href="#"><img src="/icon_mypage.svg" /></a>
        <a href="#"><img src="/icon_menu.svg" /></a>
      </div>
    </div>
  )

}