import Link from 'next/link'
import React from 'react'
import styles from './aside.module.scss'
import ListAside, { IItemAside } from '@ui/List/ListAside'

const mockListAside: Array<IItemAside> =[
  {
    title: 'Profile',
    url: '/profile'
  },
  {
    title: 'Messages',
    url: '/messages'
  },
  {
    title: 'News',
    url: '/news'
  },
  {
    title: 'Music',
    url: '/music'
  },
  {
    title: 'Settings',
    url: '/settings'
  },
]

const Aside = () => {
  return (
    <aside className={styles.wrapper}>
      <ListAside list={mockListAside} />
    </aside>
  )
}

export default Aside