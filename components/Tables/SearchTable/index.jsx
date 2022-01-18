import styles from '@/styles/Home.module.css'
import TableRow from './TableRow'

export default function Index(props) {
  const { config } = props

  const html = {
    rows: [],
  }

  for (const index in config) {
    html.rows.push(
      <TableRow
        key={ config[index].id }
        title={ config[index].title }
        selector={ config[index].selector }
      />
    )
  }

  return (
    <>
      <table className={styles.search_table}>
        { html.rows }
      </table>
    </>
  )
}
