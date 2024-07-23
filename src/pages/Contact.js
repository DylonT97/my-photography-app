import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const backgroundImageStyle = {
    backgroundImage: 'url("/images/ContactBW.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    padding: "2rem",
  };

  return (
    <div style={backgroundImageStyle} className="p-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us:</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Contact Information:</h2>
        <br />
        <p className="mb-2">
          <strong>Email:</strong>{" "}
          <a href="mailto:info@nexgenvisuals.com" className="text-blue-600">
            info@nexgenvisuals.com
          </a>
        </p>
        <p className="mb-2">
          <strong>Phone:</strong>{" "}
          <a href="tel:(123)456-7890" className="text-blue-600">
            (123) 456-7890
          </a>
        </p>
        <p>
          <strong>Follow Us:</strong>
          <br />
          <a
            href="https://www.instagram.com/yourprofile"
            className="text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: "8px" }}
          >
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </a>
          {" | "}
          <a
            href="https://www.facebook.com/yourprofile"
            className="text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: "8px" }}
          >
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </a>
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Connect With Us:</h2>
        <form action="/submit-form" method="POST" className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium">
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium">
              Your Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-lg font-medium">
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium">
              Your Message:
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full p-2 border border-gray-300 rounded"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Our Location</h2>
        <p className="mb-2">
          <strong>Address:</strong> 123 NexGen Photography Lane, South Africa,
          Durban, 4068
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110190.57155313032!2d30.945330147265085!3d-29.858680212830734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7aa1126c1a41f%3A0x400fef4fd1f4a90!2sDurban%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1695230857071!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Location Map"
          className="w-full"
        ></iframe>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Business Hours</h2>
        <p className="mb-2">
          <strong>Monday to Friday:</strong> 9AM - 6PM
          <br />
          <strong>Saturday:</strong> 10AM - 4PM
          <br />
          <strong>Sunday:</strong> Closed
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          Frequently Asked Questions:
        </h2>
        <p className="mb-2">
          <strong>How do I book a session?</strong>
          <br />
          You can book a session by contacting us via email or phone. Please
          provide details about your desired date and time.
        </p>
      </div>

      <div>
        <p className="text-lg">
          Feel free to contact us for more information, booking inquiries, or
          just to say hello!
        </p>
      </div>
    </div>
  );
};

export default Contact;
