import { Outlet } from 'react-router-dom';
import Header from '../blocks/Header';
import star from '../../assets/star.png'

export default function Layout() {
  return (
    <div className='bg-zinc-200 dark:bg-zinc-800 h-screen'>
      <Header/>
      <section className='border-y bg:zinc-400 dark:bg-zinc-900'>
        <div className='mx-auto max-w-screen-xl px-4 py-1.5 '>
          <a href="#" className='flex items-center justify-center gap-2 py-2 transition '>
            <span className='text-sm/tight font-medium text-zinc-800 dark:text-zinc-200 hover:text-yellow-400'>Enjoy RetroUI? Give it a star on GitHub</span>
            <img src={star} alt="star" className='w-4' />
          </a>
        </div>
      </section>
      <Outlet />
    </div>
  )
}
