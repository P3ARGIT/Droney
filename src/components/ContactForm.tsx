import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

// Define types for our form state
interface FormData {
  name: string;
  last_name: string;
  email: string;
  phone: string;
  message: string;
  planType: string;
}

// Define types for form validation errors
interface ValidationErrors {
  name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

// Define types for form status
interface FormStatus {
  submitted: boolean;
  success: boolean;
  message: string;
}

const ContactForm = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const plan = searchParams.get('plan');
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    last_name: '',
    email: '',
    phone: '',
    message: '',
    planType: plan || ''
  });
  
  const [formStatus, setFormStatus] = useState<FormStatus>({
    submitted: false,
    success: false,
    message: ''
  });
  
  const [validation, setValidation] = useState({
    wasValidated: false,
    errors: {} as ValidationErrors
  });

  // Update message when plan changes from query params
  useEffect(() => {
    if (plan) {
      setFormData(prev => ({
        ...prev,
        planType: plan,
        message: `I'm interested in the ${plan} plan. Please provide more information.`
      }));
    }
  }, [plan]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (): boolean => {
    const errors: ValidationErrors = {};
    if (!formData.name) errors.name = "Please provide your first name.";
    if (!formData.last_name) errors.last_name = "Please provide your last name.";
    if (!formData.email) errors.email = "Please provide your email address.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Please provide a valid email address.";
    if (!formData.phone) errors.phone = "Please provide your phone number.";
    if (!formData.message) errors.message = "Please enter your message.";
    
    setValidation({
      wasValidated: true,
      errors
    });
    
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setFormStatus({ submitted: true, success: false, message: "Please wait..." });
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "033e34e1-4218-476a-b9a1-8a5b93f8a792",
          subject: `New Drone Service Inquiry - ${formData.planType} Plan`,
          name: formData.name,
          last_name: formData.last_name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          planType: formData.planType
        })
      });
      
      const data = await response.json();
      
      if (response.status === 200) {
        setFormStatus({
          submitted: true,
          success: true,
          message: data.message || "Your message has been sent successfully!"
        });
        // Reset form
        setFormData({
          name: '',
          last_name: '',
          email: '',
          phone: '',
          message: '',
          planType: plan || ''
        });
        setValidation({ wasValidated: false, errors: {} });
      } else {
        setFormStatus({
          submitted: true,
          success: false,
          message: data.message || "Something went wrong. Please try again."
        });
      }
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message: "Something went wrong. Please try again."
      });
    }
  };

  return (

    <div className="flex items-center min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
            <div className="mb-6">
            <Link 
              to="/" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Home
            </Link>
          </div>
          <div className="text-center">
            <h1 className="my-3 text-3xl font-bold text-gray-800">
              Get Started with {formData.planType || "Drone Services"}
            </h1>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className={validation.wasValidated ? "was-validated" : ""}>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="w-full">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="First name"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    validation.errors.name ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {validation.errors.name && (
                  <p className="text-red-500 text-sm mt-1">{validation.errors.name}</p>
                )}
              </div>
              
              <div className="w-full">
                <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  placeholder="Last name"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    validation.errors.last_name ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {validation.errors.last_name && (
                  <p className="text-red-500 text-sm mt-1">{validation.errors.last_name}</p>
                )}
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="w-full">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@gmail.com"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    validation.errors.email ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {validation.errors.email && (
                  <p className="text-red-500 text-sm mt-1">{validation.errors.email}</p>
                )}
              </div>
              
              <div className="w-full">
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+32 4 12 34 56 78"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    validation.errors.phone ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {validation.errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{validation.errors.phone}</p>
                )}
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Your Message</label>
              <textarea
                name="message"
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project and requirements..."
                className={`w-full px-4 py-3 rounded-lg border ${
                  validation.errors.message ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              ></textarea>
              {validation.errors.message && (
                <p className="text-red-500 text-sm mt-1">{validation.errors.message}</p>
              )}
            </div>
            
            <div className="mb-6">
              <button
                type="submit"
                className="w-full py-4 px-6 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </div>
            
            {formStatus.submitted && (
              <div className={`text-center p-4 rounded-lg ${formStatus.success ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                {formStatus.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;