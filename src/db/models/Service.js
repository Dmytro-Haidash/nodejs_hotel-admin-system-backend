const { db } = require("../connect");
const { DataTypes } = require("sequelize");

const Service = db.define(
  "Service",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    serviceName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    tableName: "services",
    createdAt: false,
    updatedAt: false,
  },
);

const getServices = async () => {
  try {
    return await Service.findAll();
  } catch (error) {
    console.error("Error fetching services:", error);
  }
};

const getServiceById = async (id) => {
  try {
    return await Service.findByPk(id);
  } catch (error) {
    console.error("Error fetching service by ID:", error);
  }
};

const createService = async (serviceData) => {
  try {
    return await Service.create(serviceData);
  } catch (error) {
    console.error("Error creating service:", error);
  }
};

const updateService = async (id, updatedData) => {
  try {
    const service = await Service.findByPk(id);

    if (service) {
      return await service.update(updatedData);
    }

    return null;
  } catch (error) {
    console.error("Error updating service:", error);
  }
};

const deleteService = async (id) => {
  try {
    const service = await Service.findByPk(id);

    if (service) {
      await service.destroy();

      return true;
    }

    return false;
  } catch (error) {
    console.error("Error deleting service:", error);
  }
};

module.exports = {
  Service,
  getServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
};
