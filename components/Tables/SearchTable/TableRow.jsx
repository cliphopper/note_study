import styles from '@/styles/Home.module.css'

export default function TableRow(props) {
  const { title, selector } = props

  const html = {
    uls: [],
  }

  for (const index in selector) {
    const setCheckboxs = selector[index].list.map(item => {
      return (
        <li key={ item.id }>
          <input id={ `checkbox${item.id}` } type="checkbox" />
          <label htmlFor={ `checkbox${item.id}` }>{ item.name }</label>
        </li>
      )
    })


    html.uls.push(
      <ul key={ index }>
        <span className={ styles.category_mds }>{ selector[index].name }：</span>
        { setCheckboxs }
      </ul>
    )
  }

  return (
    <>
      <tr>
        <th>{ title }</th>
        <td>
          { html.uls }
        </td>
      </tr>
    </>
  )
}
