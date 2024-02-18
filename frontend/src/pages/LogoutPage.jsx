import { useNavigate } from 'react-router-dom'
import avatar from '../assets/img/user.png'

function LogoutPage () {

  const user = localStorage.getItem('username')

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    navigate('/login')
  }

  return (
    <main className="bg-zinc-200 text-slate-700">
      <section className="min-h-screen flex justify-center items-center mx-auto">
        <div className=" w-full max-w-xs bg-white rounded-xl p-25">
          <img className="rounded block h-full mx-auto" src={avatar} />
          <span className="block text-center text-xl">Jose Pereda</span>
          <button className="no-underline bg-transparen text-lg text-blue-500 p-2 w-full my-4 rounded" onClick={handleLogout}>Logout</button>
        </div>
      </section>
    </main>
  )
}
export default LogoutPage