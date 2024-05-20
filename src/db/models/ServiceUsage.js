const { db } = require("../connect");
const { DataTypes } = require("sequelize");

const ServiceUsage = db.define(
  "ServiceUsage",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    usageDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "service_usages",
    createdAt: false,
    updatedAt: false,
  },
);

const getServiceUsages = async () => {
  try {
    return await ServiceUsage.findAll();
  } catch (error) {
    console.error("Error fetching service usages:", error);
  }
};

const getServiceUsageById = async (id) => {
  try {
    return await ServiceUsage.findByPk(id);
  } catch (error) {
    console.error("Error fetching service usage by ID:", error);
  }
};

const createServiceUsage = async (serviceUsageData) => {
  try {
    return await ServiceUsage.create(serviceUsageData);
  } catch (error) {
    console.error("Error creating service usage:", error);
  }
};

const updateServiceUsage = async (id, updatedData) => {
  try {
    const serviceUsage = await ServiceUsage.findByPk(id);

    if (serviceUsage) {
      return await serviceUsage.update(updatedData);
    }

    return null;
  } catch (error) {
    console.error("Error updating service usage:", error);
  }
};

const deleteServiceUsage = async (id) => {
  try {
    const serviceUsage = await ServiceUsage.findByPk(id);

    if (serviceUsage) {
      await serviceUsage.destroy();

      return true;
    }

    return false;
  } catch (error) {
    console.error("Error deleting service usage:", error);
  }
};

module.exports = {
  ServiceUsage,
  getServiceUsages,
  getServiceUsageById,
  createServiceUsage,
  updateServiceUsage,
  deleteServiceUsage,
};
