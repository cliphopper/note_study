import Head from 'next/head'
export default function CommonHead(props) {
  return (
    <Head>
      <meta charset="utf-8" />
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}