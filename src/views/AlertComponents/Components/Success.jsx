import { BiCheckSquare } from "react-icons/bi";

export default function Success() {
  return (
    <div
    role="alert"
    className="border-t-2 border-l-2 border-b-4 border-r-4 border-green-500 bg-zinc-200 dark:bg-zinc-700 p-4"
  >
    <div className="flex items-start gap-4">
      <span className="text-green-500">
        <BiCheckSquare className="h-6 w-6"/>
      </span>
  
      <div className="flex-1">
        <strong className="block font-medium text-green-500"> Changes saved </strong>
  
        <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-200">
          Your product changes have been saved.
        </p>
      </div>
  
      <button className="text-zinc-400 transition hover:text-gray-600">
        <span className="sr-only">Dismiss popup</span>
  
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </div>
  )
}
