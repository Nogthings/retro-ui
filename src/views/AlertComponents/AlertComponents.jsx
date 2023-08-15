
export default function AlertComponents() {
    return (
        <main className="mx-auto max-w-screen-xl px-4 py-8 lg:py-12 space-y-8 lg:space-y-12">
            <div className="prose max-w-none">

                <h1 className="order-last text-lg text-zinc-800 dark:text-zinc-200">
                    Alert Components
                </h1>

                <div className='not-prose mx-auto xl:max-w-[1348px]'>
                    <ul className="space-y-8 lg:space-y-12">
                        <li>
                            <div id="component-1" className="mt-4">
                                <div className="space-y-4">
                                <h2 className="text-lg font-bold text-zinc-800 dark:text-zinc-200 sm:text-xl">
                                    <a href="#component-1" className="group relative inline-block">
                                        <span aria-hidden="true" className="hidden group-hover:opacity-25 lg:absolute lg:inset-y-0 lg:-left-6 lg:block lg:opacity-0 lg:transition">
                                            #
                                        </span>
                                        Popup</a></h2>
                                </div>
                            </div>
                            <div className="lg:flex lg:items-end my-2">
                                <div className="flex flex-wrap items-end ">
                                    <button>
                                        <div className="inline-flex items-center gap-1.5 border-2 px-3 py-1.5 border-zinc-800 dark:border-zinc-200 bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-900 hover:text-white">
                                            <span aria-hidden="true" role="img" className="text-sm">👀</span>
                                            <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200">View</span>
                                        </div>
                                    </button>
                                    {/* <button>
                                        <div className="inline-flex items-center gap-1.5 border-2 px-3 py-1.5 border-zinc-800 dark:border-zinc-200 bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-900 hover:text-white">
                                            <span aria-hidden="true" role="img" className="text-sm">👀</span>
                                            <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200">View</span>
                                        </div>
                                    </button> 
                                    <button>
                                        <div className="inline-flex items-center gap-1.5 border-2 px-3 py-1.5 border-zinc-800 dark:border-zinc-200 bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-900 hover:text-white">
                                            <span aria-hidden="true" role="img" className="text-sm">👀</span>
                                            <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200">View</span>
                                        </div>
                                    </button>                                                                       */}
                                </div>
                            </div>
                            <div className="relative">
                                <div className=" bg-zinc-200 dark:bg-zinc-700 bg-[linear-gradient(45deg,_rgb(249_250_251)_25%,_transparent_25%),_linear-gradient(-45deg,_rgb(249_250_251)_25%,_transparent_25%),_linear-gradient(45deg,_transparent_75%,_rgb(249_250_251)_75%),_linear-gradient(-45deg,_transparent_75%,_rgb(249_250_251)_75%)] bg-[length:_20px_20px] [background-position:_0_0,_0_10px,_10px_-10px,_-10px_0px] ">
                                    <iframe className="h-[400px] w-full ring-2 ring-zinc-800 dark:ring-zinc-200 lg:h-[600px] lg:transition-all bg-zinc-200 dark:bg-zinc-900" loading="lazy"
                                        src="Popup.html"/>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    )
}
