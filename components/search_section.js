import {useState} from 'react'
import styles from '../styles/Home.module.css'

export default function setCheckbox(props) {

  const url = './data/data_skey.json'
  const [data, setData] = useState({ data:[]})
  const items = []

  fetch(url)
    .then(res=> res.json())
    .then(res=> setData(res))

  if(props.cat){
    data.data.forEach(function( value ) {
      if( value.category == props.cat ){
        items.push(<SingleCheckbox dat={value} />);
      }
    });
  }else{
    data.data.forEach(function( value ) {
      items.push(<SingleCheckbox dat={value} />);
    });
  }

  return(
    <ul><span className={styles.category_mds}>{props.cat}：</span>{items}</ul>
  ) 

  function SingleCheckbox(props) {
    return (
      <li key={props.dat.id}>
        <input type="checkbox" id={props.dat.id} name={props.dat.name} />
        <label for={props.dat.id}>{props.dat.name}</label>
      </li>
    );
  }

}