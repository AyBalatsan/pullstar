import React from 'react'
import styles from './listAside.module.scss'
import Link from 'next/link'

export interface IItemAside{
  title: string;
  url: string
}
interface IOptions{
  list: Array<IItemAside>
}
function ListAside(options:IOptions) {  
  const {list} = options  
  console.log(list);
  
  return (
    <ul className={styles.list}>  
      {list.map((item: IItemAside)=> <li className={styles.item}><Link className={styles.link} href={item.url}>{item.title}</Link></li>)}
    </ul>
  )
}

export default ListAside