import { useState } from 'react';
import SearchInput from '../components/SearchInput';
import GithubIcon from '../../shared/icons/GithubIcon'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-zinc-200 dark:bg-zinc-800 text-zinc-200 border-2 border-zinc-800 dark:border-zinc-200">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <a href='#' className="ml-2 text-xl font-semibold hover:text-yellow-400">RetroUI</a>
          <nav className="ml-4 hidden md:block">
            <a href="#" className="ml-4 hover:text-yellow-400">Inicio</a>
            <a href="#" className="ml-4 hover:text-yellow-400">Acerca de</a>
            <a href="#" className="ml-4 hover:text-yellow-400">Servicios</a>
            <a href="#" className="ml-4 hover:text-yellow-400">Contacto</a>
          </nav>
        </div>
        <div className=''>
          <SearchInput/>
        </div>
        <div className="md:hidden flex items-center">
          <a href="#" className='text-xl hover:text-yellow-400'>
            <GithubIcon/>
          </a>
          <button
            onClick={toggleMenu}
            className=" px-3 py-2 focus:outline-none focus:stroke-yellow-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:stroke-yellow-400 "
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-800 ">
          <nav className="flex flex-col items-center py-4 border-t-2">
            <a href="#" className="ml-4 hover:text-yellow-400">Inicio</a>
            <a href="#" className="ml-4 hover:text-yellow-400">Acerca de</a>
            <a href="#" className="ml-4 hover:text-yellow-400">Servicios</a>
            <a href="#" className="ml-4 hover:text-yellow-400">Contacto</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
