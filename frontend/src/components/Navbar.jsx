import { Bars3Icon } from '@heroicons/react/20/solid'

function Navbar() {
  return (
    <nav className="bg-Secondary flex justify-between p-5 h-14 items-center">
      <div>
        <h2 className="text-3xl text-white uppercase font-bold">Logo</h2>
      </div>
      <div>
        <Bars3Icon className="h-12 w-8 text-white font-extrabold" />
      </div>
    </nav>
  )
}

export default Navbar
