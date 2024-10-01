import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import Navbar from "../src/components/navbar/Navbar"; // Assuming your navbar is in components folder
import HomePage from "../src/pages/Play";
import LoginPage from "../src/components/LoginPage/LoginPage";
import VenuesPage from "../src/components/Book/VenuesPage";
import VenueDetailPage from "./components/VenueDetail/VenueDetailPage";
import UserGamesPage from "./components/UserGamesPage/UserGamesPage";
import UserGameDetailPage from "./components/UserGameDetailPage/UserGameDetailPage";
import BlogPage from "./components/BlogPage/BlogPage";
import Elearn from "./components/Elearn/Elearn";



function App() {
  const location = useLocation();

  
  const noNavbarRoutes = ["/login"];// A path where navbar is not required

  return (
    <>
     
      {!noNavbarRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/book" element={<VenuesPage />} />
        <Route path="/venue/:venueId" element={<VenueDetailPage />} />
        <Route path="/user-games" element={<UserGamesPage />}/>
        <Route path="/user-games/:id" component={UserGameDetailPage} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/Elearn" element={<Elearn/>}/>



      </Routes>
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
