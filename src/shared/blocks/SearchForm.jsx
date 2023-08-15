import { useState } from 'react';
import { Link } from 'react-router-dom';

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLinkClick = () => {
    setSearchTerm('');
  };

  const items = [
    // Cambiar los valores según tu necesidad
    { id: 1, name: 'Alerts', category: 'Application UI', link: 'application-ui/alert-components' },
    { id: 2, name: 'Notifications', category: 'User Notifications', link: '#' },
    { id: 3, name: 'Messages', category: 'Communication', link: '#' },
    // ...
  ];

  const filteredItems = items
  .filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className='relative flex h-16 items-center'>
      <form className='max-w-[120px] sm:max-w-none' role='search'>
        <label htmlFor="SiteSearch" className="sr-only">Search</label>
        <input
          type="text"
          placeholder="Buscar..."
          className="w-full border-t-2 border-l-2 border-r-2 border-b-2 focus:border-t-2 focus:border-l-2 focus:border-r-4 focus:border-b-4 focus:border-yellow-400 bg-zinc-300 dark:bg-zinc-700 border-zinc-800 dark:border-zinc-200 text-sm focus:outline-none py-1 px-2"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button tabIndex="-1" className="sr-only">Submit</button>
      </form>

      {searchTerm && (
        <div className='absolute right-0 top-14 z-50 w-64 border-l-2 border-t-2 border-b-4 border-r-4 border-yellow-400 bg-zinc-200 dark:bg-zinc-800'>
          <ul className='max-h-64 space-y-1 overflow-auto p-2'>
            {filteredItems.map((item) => (
              <li key={item.id}>
                <Link to={item.link} onClick={handleLinkClick}>
                  <div className='flex items-center justify-between px-4 py-2 text-xs font-medium text-zinc-800 dark:text-zinc-200 hover:bg-zinc-300 hover:text-zinc-800 hover:dark:bg-zinc-700 hover:dark:text-zinc-200 focus:bg-gray-50'>
                    <span>{item.name}</span>
                    <span className='block rounded bg-zinc-200 dark:bg-zinc-600 px-1.5 py-0.5 text-[10px] text-zinc-200 dark:text-zinc-200'>{item.category}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchForm;
