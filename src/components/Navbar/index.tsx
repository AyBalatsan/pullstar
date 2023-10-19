import Link from 'next/link'
import React from 'react'
interface INavbarLink {
  id: number | string,
  title: string,
  url: string
}
export default function Navbar() {
  const links: INavbarLink[] = [
    {
      id: 1,
      title: 'Home',
      url: '/'
    },
    {
      id: 2,
      title: 'Portfolio',
      url: '/portfolio'
    },
    {
      id: 3,
      title: 'Blog',
      url: '/blog'
    },
    {
      id: 4,
      title: 'About',
      url: '/about'
    },
    {
      id: 5,
      title: 'Contact',
      url: '/contact'
    },
    {
      id: 6,
      title: 'Dashboard',
      url: '/dashboard'
    },
  ]

  return (
    <header className=''>
      {/* <div>
        <Link className='' href='/'>PullStar</Link>
      </div>
      <nav className=''>      
        <ul className=''>
          {links.map((link:INavbarLink) =>{
            return (
              <li className='' key={link.id}><Link  href={link.url}>{link.title}</Link></li>
            )
          })}
        </ul>
        <button className=''>Аватар</button>
      </nav> */}
    </header>
  )
}
