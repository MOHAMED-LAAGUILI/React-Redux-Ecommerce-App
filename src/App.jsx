import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from 'react';

// Components
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

// Pages
import Home from "./Pages/Home";
import NotFound404 from "./Pages/NotFound404";
import ContactUs from "./Pages/Contact";
import InfoPage from "./Pages/Info";
import PrivacyPolicy from "./Pages/Policy";
import TermsOfService from "./Pages/Tos";
import Shop from "./Pages/Shop";
import CartPage from "./Pages/Cart";
import CheckoutPage from "./Pages/Checkout";
import OrderConfirmationPage from "./Pages/Order";
import AuthPage from "./Pages/Auth";
import SearchResultsPage from "./Pages/SearchResult";
const ProductDetailsPage = lazy(() => import('./Pages/SingleProductDetails'));


// PropTypes
import PropTypes from "prop-types";
import { useState } from "react";

// SEO Hook for Managing Titles and Descriptions
const useSEO = (path) => {
  const titles = {
    "/": "Home | Online E-commerce Store | Shop Now",
    "/single-product":"Product | Shop Now",
    "/search-result": "Search Result | Online E-commerce Store",
    "/shop": "Shop | Online E-commerce Store",
    "/contact": "Contact | Online E-commerce Store",
    "/info": "About-Us | Online E-commerce Store",
    "/cart": "Cart | Online E-commerce Store",
    "/checkout": "Checkout | Online E-commerce Store",
    "/order-confirmation": "Order Confirmation | Online E-commerce Store",
    "/privacy-policy": "Privacy & Policy | Online E-commerce Store",
    "/terms": "Terms of Services | Online E-commerce Store",
    "/auth": "Auth | Online E-commerce Store",
    "*": "404 - Page Not Found | Online E-commerce Store",
  };

  const descriptions = {
    "/": "Welcome to our online store, where you can find a variety of products.",
    "/single-product":"Single Product View Details",
    "/search-result": "Result of searched product.",
    "/shop": "Discover all new products Here.",
    "/contact": "Contact us at 0689770809. We will reach you ASAP.",
    "/info": "We are an online e-shop store for e-commerce and more.",
    "/cart": "See your cart items and make your purchase.",
    "/checkout": "Make your purchase and be one of our loyal clients, Thank you for choosing us.",
    "/order-confirmation": "Confirm your order here.",
    "/privacy-policy": "Read our Privacy & Policy.",
    "/terms": "Read our Terms of Services.",
    "/auth": "Join us and create your account. If you already have one, just Login.",
    "*": "Sorry, the page you are looking for does not exist.",
  };

  return {
    title: titles[path] || titles["*"],
    description: descriptions[path] || descriptions["*"],
  };
};

// SEO Component
const SEO = ({ path }) => {
  const { title, description } = useSEO(path);
  const siteLogoPath = "/src/assets/images/Logo_E-shop.png";
  return (
    <Helmet>
    {/* Basic site meta */}
    <title>{title}</title>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={description} />

    {/* Open Graph Meta Tags */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`https://yourdomain.com${path}`} />
    <meta property="og:image" content={siteLogoPath} />
    <meta property="og:image:alt" content="Description of the image" />
    <meta property="og:site_name" content="Online E-commerce Store" />
    
    {/* Twitter Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={siteLogoPath} />
    <meta name="twitter:image:alt" content="Description of the image" />
  
    {/* Additional Meta Tags for SEO */}
    <meta name="robots" content="index, follow" />
    <meta name="keywords" content="e-commerce, online shopping, shop, products, buy online, {your keywords}" />
    <link rel="canonical" href={`https://yourdomain.com${path}`} />
    
         {/* Internet Explorer Meta Tags */}
      <meta httpEquiv="Page-Enter" content="RevealTrans(Duration=2.0,Transition=2)" />
      <meta httpEquiv="Page-Exit" content="RevealTrans(Duration=3.0,Transition=12)" />
      <meta name="mssmarttagspreventparsing" content="true" />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />

    {/* Structured Data (JSON-LD) for SEO */}
    <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Online E-commerce Store",
          "url": "https://yourdomain.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://yourdomain.com/search-result?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }
      `}
    </script>
  </Helmet>
  
  );
};

SEO.propTypes = {
  path: PropTypes.string.isRequired,
};


// Main App Component
export default function App() {
  const [order, setOrder] = useState(null);
 



  return (
    <HelmetProvider>
      <BrowserRouter>
        <Helmet>
        <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="keywords" content="react, Redux, Tailwind, ecommerce, online shopping, shop now" />
          <meta name="author" content="MOHAMED LAAGUILI | Web Developer" />
          <link rel="icon" href="/src/assets/images/Logo_E-shop.png" type="image/x-icon" />
          
            {/* Basic google meta */} 
    <meta name="google-site-verification" content="+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34="/>
    <meta name="robots" content="noindex,nofollow"></meta>

   {/* Internet Explorer Meta Tags */}
          <meta httpEquiv="Page-Enter" content="RevealTrans(Duration=2.0,Transition=2)" />
      <meta httpEquiv="Page-Exit" content="RevealTrans(Duration=3.0,Transition=12)" />
      <meta name="mssmarttagspreventparsing" content="true" />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        </Helmet>

       {/* NavBar */}
        <NavBar  />
      
        {/* Routes */}
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<><SEO path="/" /> <Home /></>} />
          <Route path="/search-result" element={<><SEO path="/search-result" /> <SearchResultsPage /></>} />
          <Route path="/shop" element={<><SEO path="/shop" /> <Shop /></>} />
          <Route path="/contact" element={<><SEO path="/contact" /> <ContactUs /></>} />
          <Route path="/info" element={<><SEO path="/info" /> <InfoPage /></>} />
          <Route path="/privacy-policy" element={<><SEO path="/privacy-policy" /> <PrivacyPolicy /></>} />
          <Route path="/terms" element={<><SEO path="/terms" /> <TermsOfService /></>} />
          <Route path="/cart" element={<><SEO path="/cart" /> <CartPage /></>} />
          <Route path="/checkout" element={<><SEO path="/checkout" /> <CheckoutPage setOrder={setOrder} /></>} />
          <Route path="/order-confirmation" element={<><SEO path="/order-confirmation" /> <OrderConfirmationPage order={order} /></>} />
          <Route path="/product/:id" element={<> <SEO path={`/single-product`} /><ProductDetailsPage /></>} />
          <Route path="/auth" element={<><SEO path="/auth" /> <AuthPage /></>} />
          <Route path="*" element={<><SEO path="*" /> <NotFound404 /></>} />
        </Routes>
        </Suspense>

        {/* Footer */}
        <Footer />

      </BrowserRouter>
    </HelmetProvider>
  );
}
