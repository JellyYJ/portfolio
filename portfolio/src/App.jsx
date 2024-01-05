import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

import AppLayout from "./ui/AppLayout";

import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import PageNotFound from "./pages/PageNotFound";
import HolidayCabinDetail from "./pages/projectPages/HolidayCabin";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="aboutMe"></Navigate>} />
            <Route element={<AboutMe />} path="aboutMe" />
            <Route element={<Projects />} path="projects" />
            <Route element={<Project />} path="projects/:project" />
            <Route
              element={<HolidayCabinDetail />}
              path="projects/holidayCabin"
            />
            <Route element={<ContactMe />} path="contactMe" />
          </Route>
          <Route element={<PageNotFound />} path="*" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
