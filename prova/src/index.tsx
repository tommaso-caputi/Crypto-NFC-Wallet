import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App";
import Login from "./pages/Login";
import Menu from "./pages/Menu";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}>
        <Route index element={<Login />} />
        <Route path="menu" element={<Menu />} />
      </Route>
    </Routes>
  </BrowserRouter> */}
    <App />
  </>
);