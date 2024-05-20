const { db } = require("../connect");
const { DataTypes } = require("sequelize");

const Booking = db.define(
  "Booking",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    bookingDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    checkInDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    checkOutDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    totalAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    tableName: "bookings",
    createdAt: false,
    updatedAt: false,
  },
);

const getBookings = async () => {
  try {
    return await Booking.findAll();
  } catch (error) {
    console.error("Error fetching bookings:", error);
  }
};

const getBookingById = async (id) => {
  try {
    return await Booking.findByPk(id);
  } catch (error) {
    console.error("Error fetching booking by ID:", error);
  }
};

const createBooking = async (bookingData) => {
  try {
    return await Booking.create(bookingData);
  } catch (error) {
    console.error("Error creating booking:", error);
  }
};

const updateBooking = async (id, updatedData) => {
  try {
    const booking = await Booking.findByPk(id);

    if (booking) {
      return await booking.update(updatedData);
    }

    return null;
  } catch (error) {
    console.error("Error updating booking:", error);
  }
};

const deleteBooking = async (id) => {
  try {
    const booking = await Booking.findByPk(id);

    if (booking) {
      await booking.destroy();

      return true;
    }

    return false;
  } catch (error) {
    console.error("Error deleting booking:", error);
  }
};

module.exports = {
  Booking,
  getBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking,
};
