import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [widthSidebarInHover, setWidthSidebarInHover] = useState<string>("w-12");

  const menuItems = [
    { label: "Início", icon: "bi-house", route: "/" },
    { label: 'Livros', icon: "bi-book", route: "/bookListing" },
    { label: 'Autores', icon: "bi-person", route: "/" }
  ]

  return (
    <div
      className={"shadow-lg transition-all h-full fixed top-0 left-0 bg-gray-900 " + widthSidebarInHover}
      onMouseEnter={() => setWidthSidebarInHover("w-60")}
      onMouseLeave={() => setWidthSidebarInHover("w-12")}
    >
      <ul className="list-none whitespace-nowrap pt-12">
        {menuItems.map(item => (
          <>
            <Link
              to={item.route}
              className={"hover:bg-blue-600 pl-3 py-2 transition-all hover:text-white cursor-pointer flex items-center"}
            >
              <i className={"text-xl " + item.icon}></i>
              <span className={"transition-all ml-7 " + (widthSidebarInHover === "w-12" ? "hidden" : "block")}>{item.label}</span>
            </Link>
          </>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar;