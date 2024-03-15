import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import HomeUi from "./pages/Homeui/HomeUi";
import Events from "./pages/events/Events";
import Notices from "./pages/notice/Notice";
import Blogs from "./pages/blog/Blog";
import Dashboard from "./dashboard/Dashboard";
import Login from "./pages/login/Login";
import News from "./pages/news/News";
import Register from "./pages/register/Register";
import LoginUser from "./pages/loginuser/LoginUser";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

function AppLayout() {
  const location = useLocation();

  const showNavBarAndFooter = location.pathname !== "/dashboard";

  return (
    <>
      {showNavBarAndFooter && <NavBar />}
      <Routes>
        <Route exact path="/" element={<HomeUi />} />
        <Route exact path="/events" element={<Events />} />
        <Route exact path="/notices" element={<Notices />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/news" element={<News />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/loginUser" element={<LoginUser />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
      {showNavBarAndFooter && <Footer />}
    </>
  );
}

export default App;
