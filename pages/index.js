import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../styles/Home.module.css'
import CommonHead from './commonHead'
import HeaderG from './header_g'
import FooterG from './footer_g'
import ButtonR from './button_r'

export default function Home() {
  let title ="HOME｜むすび TEST"
  let description ="ダイレクト転職サービスむすびfor介護のdiscription"
  let username ="山田 恵"

  // test data
  var instDatas = []
  instDatas[0] = { name:"あさひ園", address: "東京都世田谷区", imgfile:  "/facility_img/160324kaigo00.jpg", text1: "緑豊かな眺望", text2: "広い施設でゆったり", text3: "福利厚生が充実"}
  instDatas[1] = { name:"みどり園", address: "神奈川県横浜市緑区", imgfile:  "/facility_img/construction-24-1356_00.jpg", text1: "経験者優遇", text2: "寮完備", text3: "楽しい雰囲気で働けます。"}
  instDatas[2] = { name:"エーデルワイス", address: "埼玉県さいたま市旭ヶ丘", imgfile:  "/facility_img/in0023_mv-pc.jpg", text1: "急募：サービス施設管理者", text2: "ゆとりある入居人数", text3: "充実した設備の中、心温まるアットホームなやすらぎ空間"}

  function PlainCard(props) {
    return (
      <div className={styles.plain_card}>
        <a href="#">
        <div className={styles.img_cont}><img src={instDatas[props.lnum].imgfile} className={styles.fit_image}/></div>
        <div className={styles.txt_cont}>
            {instDatas[props.lnum].name} <br />
            {instDatas[props.lnum].address}
            <ul className={styles.plain_list}>
                <li>{instDatas[props.lnum].text1}</li>
                <li>{instDatas[props.lnum].text2}</li>
                <li>{instDatas[props.lnum].text3}</li>
            </ul>
        </div>
        </a>
      </div>
    );
  }

  const ReturnCards = () => {
      const items = [];
      for (let i = 0; i < instDatas.length; i++) {
          items.push(<PlainCard lnum= {i} />);
      }
      return <div className={styles.flex_container}>{items}</div>;
  };

  return (
    <div>
      <CommonHead title={title} description={description}/>
      <main className={styles.main}>
        <HeaderG username={username} />

        <div className={styles.full_container}>

        <section>
            <div className={styles.search_section}>
              <div className={styles.search_ttl}><img src="/icon_search.svg" />介護施設を探す</div>

              <table className={styles.search_table}>
                <tr>
                    <th>都道府県</th>
                    <td>
                    </td>
                </tr>
                <tr>
                    <th>募集職種</th>
                    <td>
                    </td>
                </tr>
                <tr>
                    <th>雇用形態</th>
                    <td>
                    </td>
                </tr>
                <tr>
                    <th>こだわり条件</th>
                    <td>
                    </td>
                </tr>
              </table>

              <ButtonR label="検索する" color="green" size="large" url="#"/>
            </div>
          </section>
          
          <section>
            <div className={styles.section_mds}>
              <img src="/icon_applied.svg" />応募履歴
            </div>
            <div className={styles.section_kakomi_g}>
              <ReturnCards />
            </div>
          </section>



        </div>


      </main>
      <FooterG />
    </div>
  )
}
