const { db } = require("../connect");
const { DataTypes } = require("sequelize");

const Employee = db.define(
  "Employee",
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
    position: {
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
    hireDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "employees",
    createdAt: false,
    updatedAt: false,
  },
);

const getEmployees = async () => {
  try {
    return await Employee.findAll();
  } catch (error) {
    console.error("Error fetching employees:", error);
  }
};

const getEmployeeById = async (id) => {
  try {
    return await Employee.findByPk(id);
  } catch (error) {
    console.error("Error fetching employee by ID:", error);
  }
};

const createEmployee = async (employeeData) => {
  try {
    return await Employee.create(employeeData);
  } catch (error) {
    console.error("Error creating employee:", error);
  }
};

const updateEmployee = async (id, updatedData) => {
  try {
    const employee = await Employee.findByPk(id);

    if (employee) {
      return await employee.update(updatedData);
    }

    return null;
  } catch (error) {
    console.error("Error updating employee:", error);
  }
};

const deleteEmployee = async (id) => {
  try {
    const employee = await Employee.findByPk(id);

    if (employee) {
      await employee.destroy();

      return true;
    }

    return false;
  } catch (error) {
    console.error("Error deleting employee:", error);
  }
};

module.exports = {
  Employee,
  getEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
