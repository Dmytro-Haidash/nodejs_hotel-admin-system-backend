const { db } = require("../connect");
const { DataTypes } = require("sequelize");

const Room = db.define(
  "Room",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    roomNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    floor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pricePerNight: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "rooms",
    // createdAt: false,
    // updatedAt: false,
  },
);

const getRooms = async () => {
  try {
    return await Room.findAll();
  } catch (error) {
    console.error("Error fetching rooms:", error);
  }
};

const getRoomById = async (id) => {
  try {
    return await Room.findByPk(id);
  } catch (error) {
    console.error("Error fetching room by ID:", error);
  }
};

const createRoom = async (roomData) => {
  try {
    return await Room.create(roomData);
  } catch (error) {
    console.error("Error creating room:", error);
  }
};

const updateRoom = async (id, updatedData) => {
  try {
    const room = await Room.findByPk(id);

    if (room) {
      return await room.update(updatedData);
    }

    return null;
  } catch (error) {
    console.error("Error updating room:", error);
  }
};

const deleteRoom = async (id) => {
  try {
    const room = await Room.findByPk(id);

    if (room) {
      await room.destroy();

      return true;
    }

    return false;
  } catch (error) {
    console.error("Error deleting room:", error);
  }
};

module.exports = {
  Room,
  getRooms,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom,
};
