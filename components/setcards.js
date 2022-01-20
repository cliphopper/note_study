import {useState} from 'react'
import styles from '../styles/Card.module.css'
import Link from 'next/link'
import ButtonR from '../components/button_r'

export default function setCards(props) {

  /* テスト用jsonファイルから読み込み */
  //const url = './data/data_facility.json'
  const url = 'http://localhost:3000/data/data_facility.json'
  const [data, setData] = useState({ data:[]})
  var items = []

  fetch(url)
    .then(res=> res.json())
    .then(res=> setData(res))

  /* 表示させるidの配列props.selectを参照し、一致したデータだけをPlainCardで描画 */
  if(props.select){
    data.data.forEach(function( value ) {
      for (let i = 0; i < props.select.length; i++) {
        if( props.select[i] == value.id){
          items.push(<PlainCard dat={value} dbtn={props.dbtn} cbtn={props.cbtn} />)
        }
      }
    });
  }else{
    items[0] = "　"
  }

  return (
    <div className={styles.flex_container}>{items}</div>
  )
}

function PlainCard(props) {
  const tags = []
  if(props.dbtn=="true"){
    tags.push(
      <Link href={props.dat.id}>
        <ButtonR label="詳しく見る" color="green" size="medium"/>
      </Link>
    )
  }
  if(props.cbtn=="true"){
    tags.push(
      <Link href="#">
        <ButtonR label="承認してメッセージ返信" color="dark" size="medium"/>
      </Link>
    )
  }

  return (
    <div className={styles.plain_card}>
      <a href={props.dat.id}>
        <div className={styles.img_cont}><img src={props.dat.imgfile} className={styles.fit_image}/></div>
        <div className={styles.txt_cont}>
            {props.dat.name} <br />
            {props.dat.address}
            <ul className={styles.plain_list}>
                <li key="1">{props.dat.text1}</li>
                <li key="2">{props.dat.text2}</li>
                <li key="3">{props.dat.text3}</li>
            </ul>
        </div>
      </a>
      <div>{tags}</div>
      
    </div>
  )
}
