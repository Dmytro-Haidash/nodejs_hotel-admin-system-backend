const { db } = require("../connect");
const { DataTypes } = require("sequelize");

const Payment = db.define(
  "Payment",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    paymentDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    paymentMethod: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "payments",
    createdAt: false,
    updatedAt: false,
  },
);

const getPayments = async () => {
  try {
    return await Payment.findAll();
  } catch (error) {
    console.error("Error fetching payments:", error);
  }
};

const getPaymentById = async (id) => {
  try {
    return await Payment.findByPk(id);
  } catch (error) {
    console.error("Error fetching payment by ID:", error);
  }
};

const createPayment = async (paymentData) => {
  try {
    return await Payment.create(paymentData);
  } catch (error) {
    console.error("Error creating payment:", error);
  }
};

const updatePayment = async (id, updatedData) => {
  try {
    const payment = await Payment.findByPk(id);

    if (payment) {
      return await payment.update(updatedData);
    }

    return null;
  } catch (error) {
    console.error("Error updating payment:", error);
  }
};

const deletePayment = async (id) => {
  try {
    const payment = await Payment.findByPk(id);

    if (payment) {
      await payment.destroy();

      return true;
    }

    return false;
  } catch (error) {
    console.error("Error deleting payment:", error);
  }
};

module.exports = {
  Payment,
  getPayments,
  getPaymentById,
  createPayment,
  updatePayment,
  deletePayment,
};
