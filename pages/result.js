// pages/result.js
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import Link from 'next/link'
import ButtonR from '../components/button_r'
import SetCards from '../components/setcards'
import SetCheckbox from  '../components/search_section'

export default function Home() {
  let title ="HOME｜むすび TEST"
  let description ="ダイレクト転職サービスむすびfor介護のdiscription"
  let username ="山田 恵"

  // test data
  //検索結果に表示する施設のid
  const fitem1 = ["f000001","f000002","f000003","f000004","f000005"]

  const itemArea = ["群馬県","栃木県","茨城県","埼玉県","東京都","神奈川県","千葉県"]
  const itemEmpStatus = ["正職員","契約職員","パート・バイト","業務委託"]
  const itemCondition = ["介護福祉士","通所介護・デイサービス","ボーナス・賞与あり","社会保険完備","無資格可","年齢不問","車通勤可","夜勤専従あり","グループホーム","訪問介護","未経験可","介護職員初任者研修（旧ヘルパー2級）以上","学歴不問","新規オープン","交通費支給"]
  
  return (
    <Layout title={title} description={description} username={username} >
      <main className={styles.main}>
        <div className={styles.full_container}>

          <section>
            <div className={styles.page_mds}>
              検索結果
            </div>
            <div className={styles.section_kakomi_w}>
              <SetCards select={fitem1} dbtn="false" cbtn="false"/>
            </div>
          </section>

          <section>
            <div className={styles.search_section}>
              <div className={styles.search_ttl}><img src="/icon_search.svg" />介護施設を探す</div>

              <table className={styles.search_table}>
                <tr>
                    <th>都道府県</th>
                    <td>
                      <SetCheckbox data={itemArea} idname="ia"/>
                    </td>
                </tr>
                <tr>
                    <th>雇用形態</th>
                    <td>
                      <SetCheckbox data={itemEmpStatus} idname="ie"/>
                    </td>
                </tr>
                <tr>
                    <th>こだわり条件</th>
                    <td>
                      <SetCheckbox data={itemCondition} idname="ic"/>
                    </td>
                </tr>
              </table>
              <Link href="/result">
                <ButtonR label="検索する" color="green" size="large"/>
              </Link>
            </div>
          </section>

        </div>
      </main>
    </Layout>
  )
}
