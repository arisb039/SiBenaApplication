import React from "react";
import ProfileWeb from "pages/ProfileWeb";
import HelpWeb from "pages/HelpWeb";
import SettingsWeb from "pages/SettingsWeb";
import MapWeb from "pages/MapWeb";
import MainWeb from "pages/MainWeb";
import LoginPage from "pages/LoginPage";
import HelpWebNonLogin from "pages/HelpWebNonLogin";
import RegisterWeb from "pages/RegisterWeb";
import LandingWeb from "pages/LandingWeb";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingWeb />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/registerweb" element={<RegisterWeb />} />
        <Route path="/helpwebnonlogin" element={<HelpWebNonLogin />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/mainweb" element={<MainWeb />} />
        <Route path="/mapweb" element={<MapWeb />} />
        <Route path="/settingsweb" element={<SettingsWeb />} />
        <Route path="/helpweb" element={<HelpWeb />} />
        <Route path="/profileweb" element={<ProfileWeb />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
