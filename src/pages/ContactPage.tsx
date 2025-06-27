import ContactForm from '../components/ContactForm';
import Navbar from '../components/Navigation'; // Adjust import path as needed
import { Helmet } from 'react-helmet-async';


const ContactPage = () => {
  return (
    <div>
      <Helmet>
  <title>Droney</title>
  {/* SVG favicon - modern browsers */}
  <link rel="icon" type="image/svg+xml" href="/Droney_logo.svg" />
  
  {/* Fallback favicon for browsers that don't support SVG */}
  <link rel="alternate icon" href="/favicon.ico" sizes="any" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  
  {/* For iOS devices */}
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  
  <meta name="description" content="Professional drone videography services for real estate, events, and commercial projects." />
</Helmet>
      <Navbar />
      <ContactForm />
      
    </div>
  );
};

export default ContactPage;