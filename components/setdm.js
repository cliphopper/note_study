import {useState} from 'react'
import styles from '../styles/Dm.module.css'

export default function setDm(props) {

  /* テスト用jsonファイルから読み込み */
  //const url = './data/data_facility.json'
  const url = 'http://localhost:3000/data/data_facility.json'
  const [data, setData] = useState({ data:[]})
  var items = []
  var chars = ""

  fetch(url)
    .then(res=> res.json())
    .then(res=> setData(res))

  /* 表示させるidの配列props.selectを参照し、一致したデータだけをPlainDmで描画 */
  /* これだと、常にid順になってしまう。。 */
  if(props.select){
    data.data.forEach(function( value ) {
      for (let i = 0; i < props.select.length; i++) {

        //メッセージの先頭14文字まで
        if( Number( props.select[i].newnum ) == 0 ){
          chars = props.select[i].message.slice( 0, 12 ) + "..."
        }else{
          chars = props.select[i].message
        }
        if( props.select[i].id == value.id){
          items.push(<PlainDm dat={value} message={chars} newnum={props.select[i].newnum} />)
        }
      }
    });
  }else{
    //配列が全部空だったら
    items[0] = "&nbsp;"
  }

  return (
    <div className={styles.flex_container}>{items}</div>
  )
}

function PlainDm(props) {

  //未読メッセージの数
  var badge=""
  if( Number( props.newnum ) > 0 ){
    badge = <div className={styles.dm_num}>{props.newnum}</div>
  }

  return (
    <div className={styles.dm_list}>
      <div className={styles.dm_lt}>
          <div className={styles.dm_img}><img src={props.dat.imgfile} /></div>
          <p className={styles.dm_name}>{props.dat.name}</p>
      </div>
      <div className={styles.dm_rt}>
          <p className={styles.dm_message}>{props.message}</p>
          {badge}
      </div>
    </div>
  )
}
