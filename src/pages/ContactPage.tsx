import ContactForm from '../components/ContactForm';
import Navbar from '../components/Navigation'; // Adjust import path as needed
import { Helmet } from 'react-helmet-async';

const ContactPage = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Us - Droney Aerial Videography</title>
        
        {/* Favicon - SVG for modern browsers */}
        <link rel="icon" type="image/svg+xml" href="/Droney_logo.svg" />
        
        {/* Fallback favicon for browsers that don't support SVG */}
        <link rel="alternate icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* For iOS devices */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Primary Meta Tags */}
        <meta name="title" content="Contact Us - Droney Aerial Videography" />
        <meta name="description" content="Get in touch with Droney for professional drone videography services in Belgium. Request a quote for your next project." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://droneyantwerp.com/contact" />
        <meta property="og:title" content="Contact Us - Droney Aerial Videography" />
        <meta property="og:description" content="Get in touch with Droney for professional drone videography services in Belgium. Request a quote for your next project." />
        <meta property="og:image" content="https://droneyantwerp.com/Droney_logo.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://droneyantwerp.com/contact" />
        <meta property="twitter:title" content="Contact Us - Droney Aerial Videography" />
        <meta property="twitter:description" content="Get in touch with Droney for professional drone videography services in Belgium. Request a quote for your next project." />
        <meta property="twitter:image" content="https://droneyantwerp.com/Droney_logo.png" />
      </Helmet>
      
      <Navbar />
      <ContactForm />
    </div>
  );
};

export default ContactPage;