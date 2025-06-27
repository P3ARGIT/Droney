import ContactForm from '../components/ContactForm';
import Navbar from '../components/Navigation'; // Adjust import path as needed
import { Helmet } from 'react-helmet-async';


const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <ContactForm />
      
    </div>
  );
};

export default ContactPage;