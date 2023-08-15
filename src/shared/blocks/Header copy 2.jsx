import { useState } from 'react';
import heart from '../../assets/heart.png';
import SearchInput from '../components/SearchInput';
import GithubIcon from '../../shared/icons/GithubIcon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky inset-x-0 top-0 z-50 dark:bg-zinc-800 dark:text-zinc-200 bg-white border-2 border-zinc-800 dark:border-zinc-200">
      <div className='mx-auto max-w-screen-xl px-4 relative flex h-16 items-center justify-between gap-8'>
        <div className='flex flex-1 items-center gap-4'>
          <a href="/">
            <div className='inline-flex gap-1.5 text-sm'>
              <span className='font-medium text-zinc-800 dark:text-zinc-200'>RetroUI</span>
              <img src={heart} className='h-4 w-4' />
            </div>
          </a>
          <nav className='hidden lg:block lg:flex-1' aria-label='Global'>
            <ul className='gap-4 flex'>
              <li>
                <a href="#">
                  <div className='block text-xs font-medium text-zinc-800 dark:text-zinc-200 hover:text-yellow-400'>Application UI</div>
                </a>
              </li>
              <li>
                <a href="">
                  <div className='block text-xs font-medium text-zinc-800 dark:text-zinc-200 hover:text-yellow-400'>eCommerce</div>
                </a>
              </li>
            </ul>
          </nav>

        </div>
        <div className='flex items-center justify-end gap-4'>
          <div className='relative flex h-16 items-center'>
            <form className='max-w-[120px] sm:max-w-none' role='search'>
              <label htmlFor="SiteSearch" className="sr-only">Search</label>
              <input type="text" placeholder="Buscar..." className="w-full border-t-2 border-l-2 border-r-2 border-b-2 focus:border-t-2 focus:border-l-2 focus:border-r-4 focus:border-b-4 focus:border-yellow-400 bg-zinc-300 dark:bg-zinc-700 border-zinc-800 dark:border-zinc-200 text-sm focus:outline-none py-1 px-2"></input>
              <button tabIndex="-1" className="sr-only">Submit</button>
            </form>

            <div className='absolute right-0 top-14 z-50 w-64 border-l-2 border-t-2 border-b-4 border-r-4 border-yellow-400 bg-zinc-200 dark:bg-zinc-800'>
              <ul className='max-h-64 space-y-1 overflow-auto p-2'>
                <li>
                  <a href="#">
                    <div className='flex items-center justify-between rounded-md px-4 py-2 text-xs font-medium text-zinc-800 dark:text-zinc-200 hover:bg-gray-100 focus:bg-gray-50'>
                      <span>Alerts</span>
                      <span className='block rounded bg-zinc-200 dark:bg-zinc-600 px-1.5 py-0.5 text-[10px] text-zinc-200 dark:text-zinc-200'>Application UI</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <a href="https://github.com/Nogthings/retro-ui" rel="noreferrer" target="_blank" className="inline-block text-zinc-800 dark:text-zinc-200 hover:text-yellow-400">
            <span className="sr-only"> GitHub </span>
            <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd"></path>
            </svg>
          </a>
          <div className='flex items-center lg:hidden'>
            <button className='text-zinc-800 dark:text-zinc-200 hover:text-yellow-400' onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              <span className="sr-only">Toggle menu</span>
            </button>
            {isMenuOpen && (
              <div className='absolute inset-x-0 top-14 px-2'>
                <nav className='bg-zinc-200 dark:bg-zinc-800 border-2 p-4 dark:border-yellow-400 '>
                  <ul className='space-y-4'>
                    <li>
                      <a href="#">
                        <div className="block text-xs font-medium text-zinc-800 dark:text-zinc-200  hover:text-yellow-400">Application UI</div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="block text-xs font-medium text-zinc-800 dark:text-zinc-200 hover:text-yellow-400">Application UI</div>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
