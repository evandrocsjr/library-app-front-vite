import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "../components/Layout";
import Dashboard from "./Dashboard";
import BookListing from "./BookListing";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Dashboard/>} />
          <Route element={<BookListing/>} path={"/bookListing"}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;