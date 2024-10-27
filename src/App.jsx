// src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import NotFound404 from "./Pages/NotFound404";
import ContactUs from "./Pages/Contact";
import InfoPage from "./Pages/Info";
import PrivacyPolicy from "./Pages/Policy";
import TermsOfService from "./Pages/Tos";
import PropTypes from 'prop-types';
import Shop from './Pages/Shop';

// SEO hook to manage titles and descriptions
const useSEO = (path) => {
  const titles = {
    "/": "Home | Online E-commerce Store | Shop Now",
    "/shop": "Shop | Online E-commerce Store",
    "/contact": "Contact | Online E-commerce Store",
    "/info": "About Us | Online E-commerce Store",
    "/privacy-policy": "Privacy & Policy | Online E-commerce Store",
    "/terms": "Terms of Services | Online E-commerce Store",
    "*": "404 - Page Not Found | Online E-commerce Store",
  };

  const descriptions = {
    "/": "Welcome to our online store, where you can find a variety of products.",
   "/shop": "Discover all new products Here.",
    "/contact": "Contact us at 0689770809. We will reach you ASAP.",
    "/info": "We are an online e-shop store for e-commerce and more.",
    "/privacy-policy": "Read our Privacy & Policy.",
    "/terms": "Read our Terms of Services.",
    "*": "Sorry, the page you are looking for does not exist.",
  };

  return {
    title: titles[path] || titles["*"],
    description: descriptions[path] || descriptions["*"],
  };
};

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="keywords" content="react, Redux, Tailwind, ecommerce, online shopping, shop now" />
          <meta name="author" content="MOHAMED LAAGUILI | Web Developer" />
          <link rel="icon" href="/path-to-your/favicon.ico" type="image/x-icon" />
        </Helmet>

        {/* Navigation Bar */}
        <NavBar />

        {/* Pages */}
        <Routes>
          <Route
            path="/"
            element={<> <SEO path="/" /> <Home /> </>}
          />
           <Route
            path="/shop"
            element={<> <SEO path="/shop" /> <Shop /> </>}
          />
          <Route
            path="/contact"
            element={<> <SEO path="/contact" /> <ContactUs /> </>}
          />
          <Route
            path="/info"
            element={<> <SEO path="/info" /> <InfoPage /> </>}
          />
          <Route
            path="/privacy-policy"
            element={<> <SEO path="/privacy-policy" /> <PrivacyPolicy /> </>}
          />
          <Route
            path={"/terms"}
            element={<> <SEO path={"/terms"} /> <TermsOfService /> </>}
          />
          <Route
            path="*"
            element={<> <SEO path="*" /> <NotFound404 /> </>}
          />
        </Routes>

        {/* Footer */}
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

// SEO Component
const SEO = ({ path }) => {
  const { title, description } = useSEO(path);
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://yourdomain.com${path}`} />
      <meta property="og:image" content="/path-to-your/image.jpg" />
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/path-to-your/image.jpg" />
    </Helmet>
  );
};

// Prop Types validation
SEO.propTypes = {
  path: PropTypes.string.isRequired,
};