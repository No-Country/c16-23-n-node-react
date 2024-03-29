import { useNavigate } from "react-router-dom";
import avatar from "/img/others/user.png";
import Navbar from "../../components/shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function LogoutPage() {
  // const user = localStorage.getItem("username");
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const name = localStorage.getItem("Name");

  const handleLogout = () => {
    context.handlerLogout();
    navigate("/loginTypes");
  };

  return (
    <>
      <Navbar />
      <main className="select-none bg-Primary pt-16 font-poppins text-black">
        <section className="mx-auto flex min-h-screen items-center justify-center">
          <div className=" p-25 w-full max-w-xs rounded-xl bg-Secondary">
            <img className="mx-auto block h-full rounded" src={avatar} />
            <span className="block text-center text-xl font-bold text-white">
              {name}
            </span>
            <button
              className="my-4 w-full rounded bg-transparent p-2 text-lg font-semibold text-blue-500 no-underline"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
export default LogoutPage;
