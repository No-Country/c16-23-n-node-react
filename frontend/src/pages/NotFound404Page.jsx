import sad from "/img/logo/saddog.png";

function NotFound404Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-Primary">
      <h3 className="text-3xl font-extrabold">Not Found Page 404</h3>
      <figure>
        <img className="" src={sad} />
      </figure>
    </main>
  );
}
export default NotFound404Page;
