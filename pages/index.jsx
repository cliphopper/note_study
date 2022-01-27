// pages/index.js
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import Link from 'next/link'
import ButtonR from '../components/button_r'
import SetCards from '../components/setcards'
import SetDm from '../components/setdm'
import SearchTable from '../components/Tables/SearchTable/index'
import { searchConfig } from '../configs/consts'

export default function Home() {

  //サンプル
  let title ="HOME｜むすび TEST"
  let description ="ダイレクト転職サービスむすびfor介護のdiscription"
  let username ="山田 恵"

  //DMに表示する施設のidとメッセージ

  var dms= [  
    { id: "f000005", message: "最後に受け取ったメッセージテキスト", newnum:0 },
    { id: "f000002", message: "未読のメッセージがあります", newnum:1 },
    { id: "f000003", message: "未読のメッセージがあります", newnum:2 }
  ]

  //応募履歴に表示する施設のid
  var fitem1 = ["f000001","f000003","f000004","f000005"]
  //スカウト履歴に表示する施設のid
  var fitem2 = ["f000002","f000004"]
  //お気に入りに表示する施設のid
  var fitem3 = ["f000003"]

  return (
    <Layout title={title} description={description} username={username} >
      <main className={styles.main}>
        <div className={styles.full_container}>

          <section>
            <div className={styles.search_section}>
              <div className={styles.search_ttl}>
                <img src="/common_img/icon_search.svg" />介護施設を探す
              </div>

              <SearchTable config={ searchConfig} />

              <Link href="/result">
                <ButtonR label="検索する" color="green" size="large"/>
              </Link>

            </div>
          </section>
          
          <section>
            <div className={styles.section_mds}>
              <img src="/common_img/icon_dm.svg" />ダイレクトメッセージ
            </div>
            <div className={styles.section_kakomi_w}>

              <SetDm select={dms} />

            </div>
          </section>

          <section>
            <div className={styles.section_mds}>
              <img src="/common_img/icon_applied.svg" />応募履歴
            </div>
            <div className={styles.section_kakomi_g}>

              <SetCards select={fitem1} dbtn="false" cbtn="false"/>

            </div>
          </section>

          <section>
            <div className={styles.section_mds}>
              <img src="/common_img/icon_offer.svg" />スカウト履歴
            </div>
            <div className={styles.section_kakomi_w}>

              <SetCards select={fitem2} dbtn="true" cbtn="true"/>

            </div>
          </section>

          <section>
            <div className={styles.section_mds}>
              <img src="/common_img/icon_star.svg" />お気に入り
            </div>
            <div className={styles.section_kakomi_w}>

            <SetCards select={fitem3} dbtn="true" cbtn="true"/>

            </div>
          </section>

        </div>
      </main>
    </Layout>
  )
}
