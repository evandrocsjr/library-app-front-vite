import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.tsx";
import "./Layout.module.css"
import TopBar from "./TopBar.tsx";

const Layout = () => {
  return (
    <div className="container mx-auto flex">
      <Sidebar/>
      <div className="h-screen">
        <TopBar/>
        <div className="ml-14 mt-2">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout;