import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home";
import RedirectHome from "../pages/RedirectHome";

export const RoutesTemplate = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/*' element={<RedirectHome/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default RoutesTemplate;