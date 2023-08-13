import { Link } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";

export default function Header() {
  return (
    <header className="p-2 md:p-3 lg:p-4 lx:p-6">
        <nav>
            <div className="flex items-center justify-between">
                <Link to='/' className="font-semibold text-lg">RetroUI</Link>
                <div className=" space-x-2 ">
                    <Link>Inicio</Link>
                    <Link>Componentes</Link>
                    <Link>Blog</Link>
                    <button>
                        <HiBars3/>
                    </button>
                </div>
            </div>
        
        </nav>
    </header>
  )
}
