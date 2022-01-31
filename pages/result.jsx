// pages/index.js
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import Link from 'next/link'
import ButtonR from '../components/button_r'
import SetCards from '../components/setcards'
import SearchTable from '../components/Tables/SearchTable/index'
import { searchConfig } from '../configs/consts'
import Accordion from 'react-bootstrap/Accordion';


export default function Home() {

  //サンプル
  let title ="HOME｜むすび TEST"
  let description ="ダイレクト転職サービスむすびfor介護のdiscription"
  let username ="山田 恵"

  //検索キーワード
  var searchkey = ["東京都","介護士"]
  //検索結果に表示する施設のid
  var fitem1 = ["f000001","f000003","f000004","f000005"]

  return (
    <Layout title={title} description={description} username={username} >
      <main className={styles.main}>
        <div className={styles.full_container}>

          <section>
            <Accordion defaultActiveKey="1" >
              <Accordion.Item className={styles.search_section} eventKey="0" >
                <Accordion.Header>
                  <SearchTitle title="介護施設を探す"></SearchTitle>
                </Accordion.Header>
                <Accordion.Body>

                  <SearchTable config={ searchConfig} />

                  <Link href="/result">
                    <ButtonR label="検索する" color="green" size="large"/>
                  </Link>

                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </section>
          
          <section>
            <ShowSearchKey searchkey ={searchkey} items={fitem1.length} />
              
            <div className={styles.section_kakomi_g}>
              <SetCards select={fitem1} dbtn="false" cbtn="false"/>
            </div>
          </section>


        </div>
      </main>
    </Layout>
  )
}

//検索エリアのヘッダを作成。
//BootstrapのAccordionでは、Accordion.HeaderやAccordion.Bodyの中身はコンポーネント化されていないとstyleが適用できないため。
function SearchTitle(props){
  return (
    <div className={styles.search_ttl}>
      <img src="/common_img/icon_search.svg" />
      {props.title}
    </div>
  )
}

//検索結果のタイトルを作成。
//検索のキーワードと、検索結果件数をpropsに渡す。
function ShowSearchKey(props){
  var keys = []

  for (let i = 0; i < props.searchkey.length; i++) {
    keys.push( props.searchkey[i] )
    keys.push( "　") 
  }

  return (
    <div className={styles.section_mds}>
      {keys}
      &nbsp;検索結果&#58;
      {props.items}
      &nbsp;件
    </div>
  )

}