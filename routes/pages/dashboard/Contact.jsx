import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [openFaq, setOpenFaq] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:3000/api/contact",
        formData
      );

      alert(response.data.message || "Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(
        "Contact form error:",
        error.response?.data || error.message
      );

      alert(
        error.response?.data?.message ||
          "Failed to send message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I track my order?",
      answer:
        "Go to the Orders section in your dashboard to check your delivery status.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Most orders are delivered within 30–60 minutes, depending on location and availability.",
    },
    {
      question: "Can I cancel my order?",
      answer:
        "You can cancel an order before it is dispatched.",
    },
    {
      question: "What if my order is delayed?",
      answer:
        "Contact our support team and we will help you resolve the issue.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 w-310">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Contact & Support
          </h1>

          <p className="text-gray-500 mt-1">
            Need help with your Quick Delivery order? Contact our support team.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">

          {/* Call Us */}
          <a
            href="tel:+918000093719"
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg hover:bg-blue-50 transition"
          >
            <div className="text-3xl mb-3">📞</div>

            <h2 className="text-lg font-semibold">
              Call Us
            </h2>

            <p className="text-blue-600 mt-1">
              +91 80000 93719
            </p>

            <p className="text-sm text-gray-400 mt-1">
              Click to call • Available 24/7
            </p>
          </a>

          {/* Email */}
          <a
            href="mailto:support@quickdelivery.com"
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg hover:bg-blue-50 transition"
          >
            <div className="text-3xl mb-3">📧</div>

            <h2 className="text-lg font-semibold">
              Email Support
            </h2>

            <p className="text-blue-600 mt-1">
              support@quickdelivery.com
            </p>

            <p className="text-sm text-gray-400 mt-1">
              Click to send email
            </p>
          </a>

          {/* Google Maps */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=New+Delhi+India"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg hover:bg-blue-50 transition"
          >
            <div className="text-3xl mb-3">📍</div>

            <h2 className="text-lg font-semibold">
              Our Office
            </h2>

            <p className="text-blue-600 mt-1">
              New Delhi
            </p>

            <p className="text-sm text-gray-400 mt-1">
              Click to view on Google Maps
            </p>
          </a>

        </div>

        {/* Contact Form + FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-xl font-semibold text-gray-800 mb-5">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit}>

              {/* Name */}
              <div className="mb-4">
                <label className="block font-medium mb-2">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className="block font-medium mb-2">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Subject */}
              <div className="mb-4">
                <label className="block font-medium mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Message */}
              <div className="mb-4">
                <label className="block font-medium mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="5"
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-400"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-xl font-semibold text-gray-800 mb-5">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">

              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border rounded-lg overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => handleFaq(index)}
                    className="w-full flex justify-between items-center text-left p-4 font-semibold hover:bg-blue-50 transition"
                  >
                    <span>{faq.question}</span>

                    <span className="text-xl text-blue-600">
                      {openFaq === index ? "−" : "+"}
                    </span>
                  </button>

                  {openFaq === index && (
                    <div className="px-4 pb-4 text-sm text-gray-500">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}

            </div>
          </div>

        </div>

        {/* Support Footer */}
        <div className="mt-6 bg-blue-600 text-white rounded-xl p-6 text-center">

          <h2 className="text-xl font-semibold">
            Quick Delivery Support
          </h2>

          <p className="mt-2 text-blue-100">
            We are here to help you with your orders and delivery experience.
          </p>

          <div className="flex justify-center gap-4 mt-4">

            <a
              href="tel:+918000093719"
              className="bg-white text-blue-600 px-5 py-2 rounded-lg font-medium hover:bg-gray-100"
            >
              📞 Call Support
            </a>

            <a
              href="mailto:support@quickdelivery.com"
              className="bg-white text-blue-600 px-5 py-2 rounded-lg font-medium hover:bg-gray-100"
            >
              📧 Email Support
            </a>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
