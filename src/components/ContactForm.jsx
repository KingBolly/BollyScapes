import { useState, useEffect } from "react";
import Destinations from "../data/destinations";

function ContactForm({ selectedDestination }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    destination: "",
    date: "",
    visitors: "1",
    message: "",
  });

  useEffect(() => {
    if (selectedDestination) {
      setFormData((prevData) => ({
        ...prevData,
        destination: selectedDestination,
      }));

      setErrors((prevErrors) => ({
        ...prevErrors,
        destination: "",
      }));

      setSubmitted(false);
    }
  }, [selectedDestination]);

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const today = new Date();
  const minDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));

    setSubmitted(false);
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.fullName.trim().length < 5) {
      newErrors.fullName = "Please enter your full name.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.destination) {
      newErrors.destination = "Please select a destination.";
    }

    if (!formData.date) {
      newErrors.date = "Please select your preferred visit date.";
    } else if (formData.date < minDate) {
      newErrors.date = "Your visit date cannot be in the past.";
    }

    const visitorCount = Number(formData.visitors);
    if (
      !formData.visitors.trim() ||
      !Number.isInteger(visitorCount) ||
      visitorCount < 1
    ) {
      newErrors.visitors = "Enter at least 1 visitor";
    }

    if (formData.message.trim().length < 20) {
      newErrors.message = "Your message must contain at least 20 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors); 

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);

      setFormData({
        fullName: "",
        email: "",
        destination: "",
        date: "",
        visitors: "1",
        message: "",
      });
 
    }
  };

  const inputClass =
    "dark:bg-[#142338]/50 dark:text-[#F4F4F0] w-full border border-gray-400 p-2 rounded-xl outline-none focus:border-[#1769AA] focus:ring-2 focus:ring-[#1769AA]/20";

  const errorClass = "text-red-500 text-sm mt-1";

  const labelClass =
    "text-[#17324D] dark:text-[#F4F4F0] font-semibold text-lg mb-1";

  return (
    <section className="bg-[#F0F8FF] dark:bg-[#101B2B] py-12 px-4" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col space-y-8">
          <div className="flex flex-row justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="currentColor"
              className="bi bi-envelope text-[#1769AA] dark:text-white"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
            </svg>
            <div className="text-lg text-black dark:text-[#F4F4F0]">
              <h2 className="text-3xl font-bold text-[#17324D] dark:text-[#F4F4F0]">
                Contact Us
              </h2>
              <p className="mb-2">
                Have a question or want to share your travel plans? <br /> We'd
                love to hear from you
              </p>
              <p className="flex items-center gap-3">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-envelope text-[#1769AA] dark:text-white"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                  </svg>
                </span>
                hello@bollyscapes.com
              </p>
              <p className="flex items-center gap-3">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-geo-alt-fill text-[#1769AA] dark:text-[#F4F4F0]"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                  </svg>
                </span>
                123 Travel Way, WanderLuxe City
              </p>
              <p className="flex items-center gap-3">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-telephone-fill text-[#1769AA] dark:text-[#F4F4F0]"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                    />
                  </svg>
                </span>
                +1 (555) 123-4567
              </p>
            </div>
          </div>

          <form
            noValidate
            onSubmit={handleSubmit}
            className="bg-white dark:bg-[#142338] w-full max-w-3xl mx-auto py-8 px-6 shadow-md rounded-lg"
          >
            <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <legend className="text-2xl text-[#17324D] dark:text-[#F4F4F0] font-bold mb-4">
                Send an Enquiry
              </legend>
              <div className="flex flex-col">
                <label htmlFor="fullName" className={labelClass}>
                  Full Name
                </label>
                <input
                  type="text"
                  onChange={handleChange}
                  name="fullName"
                  id="fullName"
                  value={formData.fullName}
                  placeholder="Your name"
                  className={inputClass}
                />
                {errors.fullName && (
                  <p className={errorClass}>{errors.fullName}</p>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className={labelClass}>
                  Email Address
                </label>
                <input
                  type="email"
                  onChange={handleChange}
                  id="email"
                  name="email"
                  value={formData.email}
                  placeholder="you@example.com"
                  className={inputClass}
                />
                {errors.email && <p className={errorClass}>{errors.email}</p>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="date" className={labelClass}>
                  Preferred Visit Date
                </label>
                <input
                  type="date"
                  onChange={handleChange}
                  name="date"
                  id="date"
                  min={minDate}
                  value={formData.date}
                  className={inputClass}
                />
                {errors.date && <p className={errorClass}>{errors.date}</p>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="numberOfVisitors" className={labelClass}>
                  Number of Visitors
                </label>
                <input
                  type="number"
                  onChange={handleChange}
                  name="visitors"
                  id="numberOfVisitors"
                  value={formData.visitors}
                  className={inputClass}
                  min="1"
                />
                {errors.visitors && (
                  <p className={errorClass}>{errors.visitors}</p>
                )}
              </div>

              <div className="flex flex-col md:col-span-2">
                <label htmlFor="destination" className={labelClass}>
                  Destination of Interest
                </label>
                <select
                  name="destination"
                  onChange={handleChange}
                  id="destination"
                  value={formData.destination}
                  className={inputClass}
                >
                  <option value="" disabled>
                    Select a destination
                  </option>
                  {Destinations.map((dest) => (
                    <option className="dark:bg-[#101B2B]" key={dest.id} value={dest.name}>
                      {dest.name} ({dest.country})
                    </option>
                  ))}
                </select>
                {errors.destination && (
                  <p className={errorClass}>{errors.destination}</p>
                )}
              </div>

              <div className="flex flex-col md:col-span-2">
                <label htmlFor="message" className={labelClass}>
                  Message
                </label>
                <textarea
                  placeholder="Tell us about your travel plans..."
                  name="message"
                  onChange={handleChange}
                  id="message"
                  value={formData.message}
                  rows="6"
                  className={inputClass}
                ></textarea>
                {errors.message && (
                  <p className={errorClass}>{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="md:col-span-2 w-full bg-[#1769AA] text-white py-3 rounded-lg font-medium hover:bg-[#145f9c]"
              >
                Send Enquiry
              </button>
            </fieldset>
            {submitted && (
              <h3 className="font-bold rounded-lg border border-green-500/30 mt-4 p-4 text-center bg-green-500/10 text-green-700 dark:text-green-400">Enquiries Submitted Successfully!</h3>
            )}
          </form>
        </div>
      </div>
    </section>
  ); 
}

export default ContactForm;
