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
    <header className='flex justify-between items-center min-h-[100px]'>
      <div>
        <Link className='font-bold text-2xl text-lime-200 hover:text-lime-300 transition' href='/'>BaLaBaMBa</Link>
      </div>
      <nav className='flex gap-2 items-center'>      
        <ul className='flex gap-4'>
          {links.map((link:INavbarLink) =>{
            return (
              <li className='hover:text-lime-300' key={link.id}><Link  href={link.url}>{link.title}</Link></li>
            )
          })}
        </ul>
        <button className='p-1 rounded bg-lime-200 text-black'>Logout</button>
      </nav>
    </header>
  )
}
