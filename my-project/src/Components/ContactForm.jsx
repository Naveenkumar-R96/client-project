import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    countryCode: "+91",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const newEntry = {
        ...formData,
        fullPhone: `${formData.countryCode}${formData.phone}`,
      };
      setSubmittedData((prev) => [...prev, newEntry]);
      console.log("Submitted Data:", [...submittedData, newEntry]);

      setFormData({
        name: "",
        countryCode: "+91",
        phone: "",
        email: "",
        address: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <div>
      {/* Top section */}
      <div className="bg-[#f9f9fb] relative py-16 text-center">
        {/* Decorative triangles */}
        <div className="absolute right-[100px] top-25 w-[150px] h-[150px] bg-gray-300 opacity-10 transform rotate-45 origin-top-right overflow-hidden" />
        <div className="absolute top-6 left-10 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-yellow-400 opacity-50" />
        <div className="absolute top-12 right-12 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[16px] border-l-transparent border-r-transparent border-b-blue-400 opacity-40" />
        <div className="absolute top-4 right-1/4 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-purple-400 opacity-40" />
        <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[18px] border-l-transparent border-r-transparent border-t-yellow-400 opacity-30" />
        <div className="absolute bottom-6 left-4 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[18px] border-l-transparent border-r-transparent border-t-blue-400 opacity-30" />
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-no-repeat bg-center opacity-10 pointer-events-none" />

        <h1 className="text-5xl font-extrabold text-gray-700 tracking-wide z-10 relative italic">
          Contact
        </h1>
        <p className="text-sm text-gray-500 mt-3 z-10 relative font-semibold">
          <Link to="/" className="text-black hover:underline">
            Home
          </Link>
          <span className="mx-1">›</span>
          <span className="text-blue-500">Contact</span>
        </p>
      </div>

      {/* Form section */}
      <div className="py-12 flex items-center justify-center bg-gray-100 p-6">
        <form
          className="bg-white rounded-3xl shadow-lg flex flex-col md:flex-row w-full max-w-6xl p-10 relative gap-2"
          onSubmit={handleSubmit}
        >
          {/* Left image */}
          <div className="md:w-1/3 w-full flex justify-center items-center mt-10 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1481214110143-ed630356e1bb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Contact"
              className="rounded-2xl object-cover w-full max-h-[400px]"
            />
          </div>

          {/* Form fields */}
          <div className="md:w-2/3 w-full pr-6">
            <h2 className="text-2xl font-bold text-sky-500 mb-8">
              Send Us A Message
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="border-3 border-gray-100 rounded-md px-4 py-3 w-full focus:outline-none"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1 ml-3 font-bold">{errors.name}</p>
                )}
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="w-1/3 border-3 border-gray-100 rounded-md px-3 py-3 focus:outline-none"
                  placeholder="+91"
                />
                <div className="w-2/3">
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="border-3 border-gray-100 rounded-md px-4 py-3 w-full focus:outline-none"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1 ml-3 font-bold">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="border-3 border-gray-100 rounded-md px-4 py-3 w-full focus:outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 ml-3 font-bold">{errors.email}</p>
              )}
            </div>

            <div className="mt-4">
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                className="border-3 border-gray-100 rounded-md px-4 py-3 w-full focus:outline-none"
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1 ml-3 font-bold">{errors.address}</p>
              )}
            </div>

            <div className="mt-4">
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="border-3 border-gray-100 rounded-md px-4 py-3 w-full focus:outline-none"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1 ml-3 font-bold">{errors.message}</p>
              )}
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-full font-medium transition cursor-pointer hover:bg-white hover:text-black hover:border hover:border-black flex items-center gap-2"
              >
                Submit Quote
                <FaPaperPlane className="text-sm" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
