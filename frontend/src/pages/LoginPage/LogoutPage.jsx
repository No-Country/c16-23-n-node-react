import { useNavigate } from "react-router-dom";
import avatar from "/img/others/user.png";

function LogoutPage() {
  const user = localStorage.getItem("username");

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <main className="select-none bg-Primary font-poppins text-black">
      <section className="mx-auto flex min-h-screen items-center justify-center">
        <div className=" p-25 w-full max-w-xs rounded-xl bg-Secondary">
          <img className="mx-auto block h-full rounded" src={avatar} />
          <span className="block text-white text-center text-xl font-bold">Jose Pereda</span>
          <button
            className="bg-transparent my-4 w-full rounded p-2 text-lg text-blue-500 no-underline font-semibold"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </section>
    </main>
  );
}
export default LogoutPage;
