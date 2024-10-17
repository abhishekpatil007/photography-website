import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Gallery from "./pages/Gallery";
import AboutUs from "./pages/AboutUs";
import Frame from "./pages/Frame";
import Frame1 from "./pages/Frame1";
import Frame2 from "./pages/Frame2";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/frame-3043978":
        title = "";
        metaDescription = "";
        break;
      case "/frame-3043977":
        title = "";
        metaDescription = "";
        break;
      case "/frame-3043972":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/" element={<Gallery />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/frame-3043978" element={<Frame />} />
      <Route path="/frame-3043977" element={<Frame1 />} />
      <Route path="/frame-3043972" element={<Frame2 />} />
    </Routes>
  );
}
export default App;
