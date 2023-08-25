import { BiInfoSquare } from "react-icons/bi";

export default function TopAccentBorder() {
  return (
    <div className="bg-zinc-200 dark:bg-zinc-700 border-t-4 border-teal-500 text-teal-500 px-4 py-3" role="alert">
  <div className="flex">
    <div className="py-1">
        <BiInfoSquare className="fill-current h-6 w-6 text-teal-500 mr-4"/>
    </div>
    <div>
      <p className="font-bold">Our privacy policy has changed</p>
      <p className="text-sm text-zinc-800 dark:text-zinc-200">Make sure you know how these changes affect you.</p>
    </div>
  </div>
</div>
  )
}
