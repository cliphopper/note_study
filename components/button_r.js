import styles from '../styles/Button_r.module.css'
import Link from 'next/link'

export default function ButtonR(props) {
  if(props.color=="green"){
    if(props.size=="large"){
      return (
        <a className={styles.btns}>
          <div className={styles.btn_greenL}>
            {props.label}
          </div>
        </a>
      )
    }else if(props.size=="medium"){
      return (
        <a className={styles.btns}>
          <div className={styles.btn_greenM}>
            {props.label}
          </div>
        </a>
      )
    }else{

    }
  }else if(props.color=="dark"){
    return (
      <a className={styles.btns}>
        <div className={styles.btn_darkM}>
          {props.label}
        </div>
      </a>
    )
  }

}