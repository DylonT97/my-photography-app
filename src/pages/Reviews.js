import React, { useState } from "react";

// Mock reviews data
const initialReviews = [
  {
    name: "Jane Doe",
    date: "July 15, 2024",
    rating: 5,
    testimonial:
      "The wedding photos turned out amazing! The photographer was professional and captured every moment beautifully.",
    project: "Wedding Photography",
    photo: "/images/Jane.png",
  },
  {
    name: "John Smith",
    date: "June 30, 2024",
    rating: 4,
    testimonial:
      "Great experience with the portrait session. The photos are stunning and the session was fun and relaxed.",
    project: "Portrait Session",
    photo: "/images/John.png",
  },
  {
    name: "Emily Johnson",
    date: "June 20, 2024",
    rating: 5,
    testimonial:
      "Fantastic event coverage! The photos perfectly captured the energy and excitement of the event.",
    project: "Event Photography",
    photo: "/images/Emily.png",
  },
];

// Helper function to render stars based on rating
const renderStars = (rating) => {
  return (
    <div className="flex">
      {Array.from({ length: 5 }, (v, i) => (
        <svg
          key={i}
          className={`w-6 h-6 ${
            i < rating ? "text-yellow-500" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
};

const Reviews = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [newReview, setNewReview] = useState({
    name: "",
    date: "",
    rating: 0,
    testimonial: "",
    project: "",
    photo: "/images/default.jpg",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleStarClick = (rating) => {
    setNewReview({ ...newReview, rating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([newReview, ...reviews]);
    setNewReview({
      name: "",
      date: "",
      rating: 0,
      testimonial: "",
      project: "",
      photo: "/images/default.jpg",
    });
  };

  return (
    <div
      className="p-8"
      style={{
        backgroundImage: "url('/images/ReviewBG.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-4xl font-bold mb-6 mt-4">Customer Reviews</h1>
      {reviews.slice(0, 3).map((review, index) => (
        <div
          key={index}
          className="mb-8 p-4 border rounded-lg shadow-lg bg-gray-800"
        >
          <div className="flex items-center mb-4">
            <img
              src={review.photo}
              alt={review.name}
              className="w-16 h-16 rounded-full mr-4"
              style={{
                border: "2px solid #fff",
                boxShadow: "0 4px 8px rgba(0,0,0,0.5)",
              }}
            />
            <div>
              <h3 className="text-2xl font-semibold text-white">
                {review.name}
              </h3>
              <p className="text-gray-400">{review.date}</p>
              {renderStars(review.rating)}
            </div>
          </div>
          <p className="text-lg mb-2 text-white">
            <strong>Project:</strong> {review.project}
          </p>
          <p className="text-lg text-white">{review.testimonial}</p>
        </div>
      ))}
      <form
        onSubmit={handleSubmit}
        className="mb-8 p-4 border rounded-lg shadow-lg bg-gray-800"
      >
        <div className="mb-4">
          <label
            className="block text-lg font-medium mb-2 text-white"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            value={newReview.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg bg-gray-700 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-lg font-medium mb-2 text-white"
            htmlFor="date"
          >
            Date
          </label>
          <input
            type="date"
            name="date"
            value={newReview.date}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg bg-gray-700 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2 text-white">
            Rating
          </label>
          <div className="flex">
            {Array.from({ length: 5 }, (v, i) => (
              <svg
                key={i}
                className={`w-6 h-6 cursor-pointer ${
                  i < newReview.rating ? "text-yellow-500" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 24 24"
                onClick={() => handleStarClick(i + 1)}
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-lg font-medium mb-2 text-white"
            htmlFor="project"
          >
            Project
          </label>
          <input
            type="text"
            name="project"
            value={newReview.project}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg bg-gray-700 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-lg font-medium mb-2 text-white"
            htmlFor="testimonial"
          >
            Testimonial
          </label>
          <textarea
            name="testimonial"
            value={newReview.testimonial}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg bg-gray-700 text-white"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-lg"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default Reviews;
