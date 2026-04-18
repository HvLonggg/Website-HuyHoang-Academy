import { NavLink } from "react-router-dom";

const menus = [
  { to: "/", label: "Trang chu" },
  { to: "/about", label: "Gioi thieu" },
  { to: "/programs", label: "Chuong trinh hoc" },
  { to: "/news-events", label: "Tin tuc" },
  { to: "/contact", label: "Lien he" },
];

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold text-primary" to="/">
          Du hoc Huy Hoang
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainMenu"
          aria-controls="mainMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mainMenu">
          <ul className="navbar-nav ms-auto">
            {menus.map((menu) => (
              <li className="nav-item" key={menu.to}>
                <NavLink
                  to={menu.to}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "text-primary fw-semibold" : "text-dark"}`
                  }
                >
                  {menu.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
