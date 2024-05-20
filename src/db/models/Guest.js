const { db } = require("../connect");
const { DataTypes } = require("sequelize");

const Guest = db.define(
  "Guest",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    passportNumber: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
  },
  {
    tableName: "guests",
    createdAt: false,
    updatedAt: false,
  },
);

const getGuests = async () => {
  try {
    return await Guest.findAll();
  } catch (error) {
    console.error("Error fetching guests:", error);
  }
};

const getGuestById = async (id) => {
  try {
    return await Guest.findByPk(id);
  } catch (error) {
    console.error("Error fetching guest by ID:", error);
  }
};

const createGuest = async (guestData) => {
  try {
    return await Guest.create(guestData);
  } catch (error) {
    console.error("Error creating guest:", error);
  }
};

const updateGuest = async (id, updatedData) => {
  try {
    const guest = await Guest.findByPk(id);

    if (guest) {
      return await guest.update(updatedData);
    }

    return null;
  } catch (error) {
    console.error("Error updating guest:", error);
  }
};

const deleteGuest = async (id) => {
  try {
    const guest = await Guest.findByPk(id);

    if (guest) {
      await guest.destroy();

      return true;
    }

    return false;
  } catch (error) {
    console.error("Error deleting guest:", error);
  }
};

module.exports = {
  Guest,
  getGuests,
  getGuestById,
  createGuest,
  updateGuest,
  deleteGuest,
};
