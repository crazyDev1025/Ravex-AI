import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./modules/home";
import FAQSPage from "./pages/faqs";
import GlossaryPage from "./pages/glossary";
import PrivacyPolicy from "./pages/privacy-policy";
import TermsOfService from "./pages/terms-of-service";
import MediaKitPage from "./pages/media-kit";
import BlogPage from "./pages/blog/blog";
import BlogDetailsPage from "./pages/blog/blog-details";

function Routess() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/faqs" element={<FAQSPage />} />
          <Route path="/glossary" element={<GlossaryPage />} />
          <Route path="/media-kit" element={<MediaKitPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routess;
