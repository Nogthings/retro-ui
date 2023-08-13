import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

export default function Layout() {
  return (
    <div>
        <div>
            <Header/>
        </div>
        <div className='bg-zinc-200 dark:bg-zinc-600 p-8 md:p-10 lg:p-14 h-screen'>
        <Outlet/>

        </div>
    </div>
  )
}
