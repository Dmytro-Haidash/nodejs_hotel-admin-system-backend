const { db } = require("../connect");
const { DataTypes } = require("sequelize");

const RoomType = db.define(
  "RoomType",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    typeName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    basePrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    tableName: "room_types",
    createdAt: false,
    updatedAt: false,
  },
);

const getRoomTypes = async () => {
  try {
    return await RoomType.findAll();
  } catch (error) {
    console.error("Error fetching room types:", error);
  }
};

const getRoomTypeById = async (id) => {
  try {
    return await RoomType.findByPk(id);
  } catch (error) {
    console.error("Error fetching room type by ID:", error);
  }
};

const createRoomType = async (roomTypeData) => {
  try {
    return await RoomType.create(roomTypeData);
  } catch (error) {
    console.error("Error creating room type:", error);
  }
};

const updateRoomType = async (id, updatedData) => {
  try {
    const roomType = await RoomType.findByPk(id);

    if (roomType) {
      return await roomType.update(updatedData);
    }

    return null;
  } catch (error) {
    console.error("Error updating room type:", error);
  }
};

const deleteRoomType = async (id) => {
  try {
    const roomType = await RoomType.findByPk(id);

    if (roomType) {
      await roomType.destroy();

      return true;
    }

    return false;
  } catch (error) {
    console.error("Error deleting room type:", error);
  }
};

module.exports = {
  RoomType,
  getRoomTypes,
  getRoomTypeById,
  createRoomType,
  updateRoomType,
  deleteRoomType,
};
