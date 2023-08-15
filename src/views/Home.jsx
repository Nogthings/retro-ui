import { Link } from 'react-router-dom';
import bell from '../assets/bell.png';

export default function Home() {
  return (
    <main>
      <section className='mx-auto max-w-screen-xl px-4 py-8 lg:py-12'>
        <div className='flex flex-col space-y-4 space-y-reverse'>
          <h1 className="order-last text-lg text-zinc-800 dark:text-zinc-200">
            Maximize React with TailwindCSS Compatible Components
          </h1>
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-300 sm:text-6xl">
            RetroUI
          </h2>
        </div>
        <p className="mt-6 max-w-lg text-base/relaxed text-zinc-600 dark:text-zinc-200">
          Elevate projects with optimized, ready-to-use components. Streamline development, enhance user experience, and unlock the potential of ReactWinds today.
        </p>
      </section>
      <div className='mx-auto max-w-screen-xl px-4 pb-8 lg:pb-12'>
        <ul className="space-y-8">
          <li className="space-y-4">
            <h2 className="text-lg font-bold text-zinc-800 dark:text-zinc-200 sm:text-xl">ApplicationUI</h2>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <li>
                <Link to="application-ui/alert-components">
                  <div className="group relative block h-full bg-zinc-200 dark:bg-zinc-800 before:absolute before:inset-0 before:border-2 before:border-dashed before:border-zinc-800 dark:before:border-zinc-200">
                    <div className="border-2 border-zinc-800 dark:border-zinc-200 bg-zinc-200 dark:bg-zinc-700 transition group-hover:-translate-y-2 ltr:group-hover:-translate-x-2 rtl:group-hover:translate-x-2">
                      <div className="p-4 sm:p-6">
                        <div className="flex items-start justify-between">
                          <img src={bell} alt="bell" className="w-6"/>
                        </div>
                        <h2 className="mt-4 font-medium text-zinc-800 dark:text-zinc-200 sm:text-lg">Alerts</h2>
                        <p className="mt-1 text-xs text-zinc-700 dark:text-zinc-300">4 Components</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </main>
  )
}
