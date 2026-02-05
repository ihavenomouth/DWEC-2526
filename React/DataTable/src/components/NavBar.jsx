import { Link } from "wouter";

function NavBar() {
  return (
    <>
      <div className="navbar bg-base-300 shadow-sm">
        <div className="flex-1">
          <Link className="btn btn-ghost text-xl" href="/">
            DataTable
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/datatable">DataTable</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
