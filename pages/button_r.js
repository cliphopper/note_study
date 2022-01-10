import styles from '../styles/Button_r.module.css'

export default function ButtonR(props) {
  if(props.color=="green"){
    if(props.size=="large"){
      return (
        <a href={props.url} className={styles.btns}>
          <div className={styles.btn_greenL}>
            {props.label}
          </div>
        </a>
      )
    }else{
      return (
        <a href={props.url} className={styles.btns}>
          <div className={styles.btn_greenM}>
            {props.label}
          </div>
        </a>
      )

    }
  }else{

  }

}