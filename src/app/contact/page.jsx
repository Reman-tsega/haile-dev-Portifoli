"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm, ValidationError } from '@formspree/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();
  const [state, handleSubmit] = useForm("myzgwjrb");
  if (state.succeeded) {
    toast.success("Your message has been sent successfully!");

  }else{
    toast.error("Something went wrong! Please try again.");
  
  }
const text = 'Get in touch'
  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* CONTACT INFORMATION */}
      <div className="lg:w-1/2 flex flex-col items-center lg:items-start gap-8 lg:gap-12 mb-8 lg:mb-0">
      <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        <motion.p
          className="text-xl text-gray-600"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          I’m always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
        </motion.p>
        <motion.div
          className="flex flex-col gap-4 text-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex items-center gap-4">
            <span className="font-bold text-gray-800">Email:</span>
            <a href="mailto:your-email@example.com" className="text-blue-500 hover:underline">
              remantsega@gamil.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-bold text-gray-800">Phone:</span>
            <a href="tel:+1234567890" className="text-blue-500 hover:underline">
              +251947731212
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-bold text-gray-800">telegram:</span>
            <a href="tel:+1234567890" className="text-blue-500 hover:underline">
              @kings_time
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-bold text-gray-800">LinkedIn:</span>
            <a href="https://www.linkedin.com/in/haylemichael-tsega-2305651b5/" className="text-blue-500 hover:underline">
              linkedin
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-bold text-gray-800">GitHub:</span>
            <a href="https://github.com/Reman-tsega" className="text-blue-500 hover:underline">
              github
            </a>
          </div>
        </motion.div>
      </div>
      {/* FORM CONTAINER */}
      <form
      onSubmit={handleSubmit}
      method="post"
        // onSubmit={sendEmail}
        action="https://formspree.io/f/myzgwjrb"
        ref={form}
        className="lg:w-1/2 bg-gray-100 rounded-xl shadow-lg p-8 flex flex-col gap-6"
      >
        <motion.h2
          className="text-3xl font-semibold text-gray-800"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Send me a Message
        </motion.h2>
        <textarea
          rows={6}
          className="bg-white border-2 border-gray-300 rounded p-4 outline-none"
          name="message"
          id="message"
          type=  "text"
          placeholder="Your message here..."
        />
        <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
        <input
          name="email"
          type="email"
          id="email"
          className="bg-white border-2 border-gray-300 rounded p-4 outline-none cursor-pointer"
          placeholder="email"
        />
<ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
        <button
          type="submit" disabled={state.submitting}
          className="bg-blue-500 text-white rounded p-4 font-semibold hover:bg-blue-600 transition"
        >
          Send Message
        </button>
        {success && (
          <motion.span
            className="text-green-600 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Your message has been sent successfully!
          </motion.span>
        )}
        {error && (
          <motion.span
            className="text-red-600 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Something went wrong! Please try again.
          </motion.span>
        )}
      </form>      
      <ToastContainer />

    </motion.div>
  );
};

export default ContactPage;
