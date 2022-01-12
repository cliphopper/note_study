import Head from 'next/head'
import Header_g from './header_g'
import Footer_g from './footer_g'

export default function Layout(props) {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header_g username={props.username} />
          {props.children}
      <Footer_g />
    </div>
  )
}
