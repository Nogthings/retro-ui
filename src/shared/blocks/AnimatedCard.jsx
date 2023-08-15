const AnimatedCard = () => {

    return(
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <li>
          <a href="#">
            <div className="group relative block h-full bg-zinc-200 dark:bg-zinc-800 before:absolute before:inset-0 before:border-2 before:border-dashed before:border-zinc-800 dark:before:border-zinc-200">
              <div className="border-2 border-zinc-800 dark:border-zinc-200 bg-zinc-200 dark:bg-zinc-700 transition group-hover:-translate-y-2 ltr:group-hover:-translate-x-2 rtl:group-hover:translate-x-2">
                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between">
                    <span aria-hidden="true" role="img" className="text-lg sm:text-xl">📣</span>
                  </div>
                  <h2 className="mt-4 font-medium text-zinc-800 dark:text-zinc-200 sm:text-lg">Alerts</h2>
                  <p className="mt-1 text-xs text-zinc-700 dark:text-zinc-300">4 Components</p>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    )
}

export default AnimatedCard;