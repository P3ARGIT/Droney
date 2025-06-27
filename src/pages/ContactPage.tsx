import ContactForm from '../components/ContactForm';
import Navbar from '../components/Navigation'; // Adjust import path as needed
import { Helmet } from 'react-helmet-async';

const ContactPage = () => {
  return (
    <div>
      <Helmet>
        <title>Droney</title>
        
        {/* Favicon setup - using the files you actually have */}
        <link rel="icon" type="image/svg+xml" href="/Droney_logo.svg" />
        <link rel="icon" type="image/png" href="/Droney_logo.png" />
        <link rel="apple-touch-icon" href="/Droney_logo.png" />
        
        {/* Primary Meta Tags */}
        <meta name="title" content="Droney - Professional Aerial Videography" />
        <meta name="description" content="Professional drone videography services for real estate, events, and commercial projects in Belgium." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://droneyantwerp.com/" />
        <meta property="og:title" content="Droney - Professional Aerial Videography" />
        <meta property="og:description" content="Professional drone videography services for real estate, events, and commercial projects in Belgium." />
        <meta property="og:image" content="https://droneyantwerp.com/Droney_logo.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://droneyantwerp.com/" />
        <meta property="twitter:title" content="Droney - Professional Aerial Videography" />
        <meta property="twitter:description" content="Professional drone videography services for real estate, events, and commercial projects in Belgium." />
        <meta property="twitter:image" content="https://droneyantwerp.com/Droney_logo.png" />
      </Helmet>
      
      <Navbar />
      <ContactForm />
    </div>
  );
};

export default ContactPage;