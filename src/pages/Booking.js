import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { isSameDay, isAfter } from "date-fns";
import "../App.css";

const timeSlots = [
  "08:00 AM",
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [bookedDates, setBookedDates] = useState([
    //{ date: new Date(2024, 6, 10), slots: ["09:00 AM", "01:00 PM"] },
    //{ date: new Date(2024, 6, 15), slots: ["11:00 AM"] },
    //{ date: new Date(2024, 6, 20), slots: ["02:00 PM", "04:00 PM"] },
  ]);
  const [location, setLocation] = useState("");
  const [policyAccepted, setPolicyAccepted] = useState(false);
  const [rescheduledDate, setRescheduledDate] = useState(null);
  const [rescheduledTimeSlot, setRescheduledTimeSlot] = useState("");
  const [currentBooking, setCurrentBooking] = useState(null); // New state for current booking

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTimeSlot(""); // Reset time slot when date changes
  };

  const handleTimeSlotChange = (e) => {
    setSelectedTimeSlot(e.target.value);
  };

  const handleRescheduleDateChange = (date) => {
    setRescheduledDate(date);
  };

  const handleRescheduleTimeSlotChange = (e) => {
    setRescheduledTimeSlot(e.target.value);
  };

  const handleBooking = () => {
    if (selectedDate && selectedTimeSlot && policyAccepted) {
      const newBooking = {
        date: selectedDate,
        slots: [
          ...(bookedDates.find((d) => isSameDay(d.date, selectedDate))?.slots ||
            []),
          selectedTimeSlot,
        ],
      };
      setBookedDates((prevDates) => [
        ...prevDates.filter((d) => !isSameDay(d.date, selectedDate)),
        newBooking,
      ]);
      setCurrentBooking({
        date: selectedDate.toDateString(),
        timeSlot: selectedTimeSlot,
        location,
      });
      alert(
        `Booking confirmed for ${selectedDate.toDateString()} at ${selectedTimeSlot}`
      );
      // Reset the state
      setSelectedDate(null);
      setSelectedTimeSlot("");
      setLocation("");
      setPolicyAccepted(false);
    } else {
      alert("Please select a date, time slot, and accept the booking policy.");
    }
  };

  const handleReschedule = () => {
    if (rescheduledDate && rescheduledTimeSlot && policyAccepted) {
      const updatedDates = bookedDates.map((booking) => {
        if (isSameDay(booking.date, selectedDate)) {
          return {
            ...booking,
            slots: booking.slots.filter((slot) => slot !== selectedTimeSlot),
          };
        }
        if (isSameDay(booking.date, rescheduledDate)) {
          return {
            ...booking,
            slots: [...booking.slots, rescheduledTimeSlot],
          };
        }
        return booking;
      });
      setBookedDates(updatedDates);
      setCurrentBooking({
        date: rescheduledDate.toDateString(),
        timeSlot: rescheduledTimeSlot,
        location,
      });
      alert(
        `Booking rescheduled to ${rescheduledDate.toDateString()} at ${rescheduledTimeSlot}`
      );
      // Reset the state
      setRescheduledDate(null);
      setRescheduledTimeSlot("");
      setPolicyAccepted(false);
    } else {
      alert(
        "Please select a new date, time slot, and accept the booking policy."
      );
    }
  };

  const getAvailableSlots = (date) => {
    const bookedDate = bookedDates.find((booking) =>
      isSameDay(booking.date, date)
    );
    return timeSlots.map((slot) => ({
      time: slot,
      booked: bookedDate?.slots.includes(slot),
    }));
  };

  const isDateBooked = (date) => {
    return bookedDates.some((booking) => isSameDay(date, booking.date));
  };

  return (
    <div
      className="booking-container"
      style={{
        backgroundImage: `url(/images/Pic2.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "20px",
        minHeight: "100vh", // Ensure the background covers the viewport height
      }}
    >
      <div
        className="current-booking-info"
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          background: "rgba(255, 255, 255, 0.8)",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <h2 className="text-xl font-semibold mb-2">Current Booking:</h2>
        {currentBooking ? (
          <div>
            <p>
              <strong>Date:</strong> {currentBooking.date}
            </p>
            <p>
              <strong>Time Slot:</strong> {currentBooking.timeSlot}
            </p>
            <p>
              <strong>Location:</strong>{" "}
              {currentBooking.location || "Not selected"}
            </p>
          </div>
        ) : (
          <p>No current booking</p>
        )}
      </div>

      <h1 className="text-3xl font-bold mb-4">Book a Session:</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Select a Date:</h2>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          inline
          filterDate={(date) =>
            !isDateBooked(date) && isAfter(date, new Date())
          }
          highlightDates={bookedDates.map((b) => b.date)}
        />
      </div>

      {selectedDate && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Select a Time Slot:</h2>
          <select
            value={selectedTimeSlot}
            onChange={handleTimeSlotChange}
            className="w-full p-2 border border-gray-300 rounded select-time-slot"
          >
            <option value="">Select a time slot:</option>
            {getAvailableSlots(selectedDate).map((slot) => (
              <option
                key={slot.time}
                value={slot.time}
                className={`time-slot-option ${
                  slot.booked ? "booked-slot" : ""
                }`}
                disabled={slot.booked}
              >
                {slot.time}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Reschedule Booking:</h2>
        <DatePicker
          selected={rescheduledDate}
          onChange={handleRescheduleDateChange}
          inline
          filterDate={(date) =>
            !isDateBooked(date) && isAfter(date, new Date())
          }
          highlightDates={bookedDates.map((b) => b.date)}
        />
        {rescheduledDate && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              Select a New Time Slot:
            </h2>
            <select
              value={rescheduledTimeSlot}
              onChange={handleRescheduleTimeSlotChange}
              className="w-full p-2 border border-gray-300 rounded select-time-slot"
            >
              <option value="">Select a time slot:</option>
              {getAvailableSlots(rescheduledDate).map((slot) => (
                <option
                  key={slot.time}
                  value={slot.time}
                  className={`time-slot-option ${
                    slot.booked ? "booked-slot" : ""
                  }`}
                  disabled={slot.booked}
                >
                  {slot.time}
                </option>
              ))}
            </select>
            <button
              onClick={handleReschedule}
              className="bg-yellow-500 text-white py-2 px-4 rounded mt-4"
            >
              Reschedule Booking
            </button>
          </div>
        )}
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Location Choice:</h2>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded select-time-slot"
        >
          <option value="">Select a location</option>
          <option value="studio">Studio</option>
          <option value="outdoor">Outdoor</option>
          <option value="client-location">Client's Location</option>
        </select>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Accept Booking Policy:</h2>
        <input
          type="checkbox"
          checked={policyAccepted}
          onChange={() => setPolicyAccepted(!policyAccepted)}
        />
        <span className="ml-2">I accept the booking policy</span>
      </div>

      <button
        onClick={handleBooking}
        className="bg-yellow-500 text-white py-2 px-4 rounded"
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default Booking;
