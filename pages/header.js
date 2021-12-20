import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Header(props) {
  return (
    <Head>
      <meta charset="utf-8" />
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}