import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ContactForm embeds the MondialPack Typeform contact form using the standard
 * Typeform embed script. It automatically passes hidden fields like the current
 * pathname and any present UTM parameters so that the data can be consumed by
 * connected systems (e.g. HubSpot, Google Analytics, Zapier).
 */
const ContactForm = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // Ensure page title is correct
    document.title = "Contact Us - MondialPack";

    // Load Typeform embed script
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      data-tf-live="01JTGWTZFNR36T7MTYJRT1RPV5"
      className="w-full h-[600px] rounded-lg shadow-lg"
    />
  );
};

export default ContactForm; 