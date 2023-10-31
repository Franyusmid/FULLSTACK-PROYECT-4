import { Link, Outlet } from "react-router-dom";

const layout = () => {
  return (
    <>
      <nav className="flex flex-row w-full justify-center p-4">
        <li className="list-none scroll px-8 text-2xl">
          <Link to="/aboutUs">QUIENES SOMOS</Link>
        </li>
        <li  className="list-none scroll px-8 text-2xl">
          <Link to="/reservation">RESERVACIONES</Link>
        </li>
      </nav>
    
      <Outlet />
    </>
  );
};

export default layout;