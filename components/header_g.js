import Link from 'next/link'
import styles from '../styles/Header_g.module.css'
import Dropdown from 'react-bootstrap/Dropdown';


export default function Header_g(props) {

  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>
        <a href="/">
          <a>
            <img src="/common_img/logoW.png" />
          </a>
        </a>
        <div className={styles.logoname}>
          <a href="/">
            <a>
              ダイレクト転職サービス<br></br>
              <img src="/common_img/logo_musubi_W.png" /> for 介護士
            </a>
          </a>
        </div>
      </h1>
      <div className={styles.headerRight}>
        <Link href="#" >
          <a className={styles.username}>
            {props.username}
          </a>
        </Link>
        <Link href="#">
          <a>
            <img src="/common_img/icon_mypage.svg" />
          </a>
        </Link>
        
        <Dropdown>
          <Dropdown.Toggle id="drop_exe" variant="success">
            Menu
          </Dropdown.Toggle>

          <Dropdown.Menu variant="light" >
            <Dropdown.Item href="#" className={styles.dropmenu}>公式ページトップ</Dropdown.Item>
            <Dropdown.Item href="#" className={styles.dropmenu}>ご利用方法</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#" className={styles.dropmenu}>ログアウト</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      </div>
    </div>
  )

}
