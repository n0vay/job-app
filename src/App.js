import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

//Layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import CareersLayout from "./layouts/CareersLayout";

//Pages
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import NotFound from "./pages/NotFound";
import Careers, { careersLoader } from "./pages/careers/Careers";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<Faq />} />
      </Route>
      <Route path="careers" element={<CareersLayout />}>
        <Route index element={<Careers />} loader={careersLoader}></Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
