import { Link } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";

export default function Header() {
  return (
    <header className="p-2 md:p-3 lg:p-4 lx:p-6 bg-zinc-200 dark:bg-zinc-600">
        <nav className="border-2 px-2 py-4 border-zinc-600 dark:border-zinc-200">
            <div className="flex items-center justify-between">
                <Link to='/' className="font-semibold text-lg text-zinc-600 dark:text-zinc-200">RetroUI</Link>
                <div className=" text-zinc-600 dark:text-zinc-200 space-x-2 flex items-center align-middle">
                    <Link>Inicio</Link>
                    <Link>Componentes</Link>
                    <Link>Blog</Link>

                    <button className="md:hidden">
                        <HiBars3 className="text-2xl"/>
                    </button>
                </div>
            </div>
        
        </nav>
    </header>
  )
}
