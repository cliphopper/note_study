import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import styles from '../styles/Home.module.css'
import Header from './header'

export default function Home() {
  let title ="HOME｜むすび TEST"
  let description ="ダイレクト転職サービスむすびfor介護"
  let username ="山田　恵"

  // test data
  var instDatas = []
  instDatas[0] = { name:"あさひ園", address: "東京都世田谷区", imgfile:  "/facility_img/160324kaigo00.jpg", text1: "緑豊かな眺望", text2: "広い施設でゆったり", text3: "福利厚生が充実"}
  instDatas[1] = { name:"みどり園", address: "神奈川県横浜市緑区", imgfile:  "/facility_img/construction-24-1356_00.jpg", text1: "経験者優遇", text2: "寮完備", text3: "楽しい雰囲気で働けます。"}
  instDatas[2] = { name:"エーデルワイス", address: "埼玉県さいたま市旭ヶ丘", imgfile:  "/facility_img/in0023_mv-pc.jpg", text1: "急募：サービス施設管理者", text2: "ゆとりある入居人数", text3: "充実した設備の中、心温まるアットホームなやすらぎ空間"}

  function PlainCard(props) {
    return (
      <div className={styles.plain_card}>
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
    <div className={styles.container}>
      <Header title={title} description={description}/>

      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.logo}>★</h1>
          <div className={styles.username}>
            <a>{username}</a>
            <img src="/icon_menu.svg" />
          </div>
        </div>

        <div className={styles.full_container}>

          <div className={styles.search_container}>
              <p>施設をさがす</p>
          </div>
          
          <div className={styles.card_content}>
            <ReturnCards />
          </div>
        </div>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
            <Button variant="outline-primary">プライマリーボタン</Button>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
            <Button variant="outline-secondary" >セカンダリボタン</Button>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
            <Button variant="success">success</Button>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
            <Button variant="dark">dark</Button>
          </a>
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
