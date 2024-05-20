const { Guest } = require("./models/Guest");
const { RoomType } = require("./models/RoomType");
const { Room } = require("./models/Room");
const { Booking } = require("./models/Booking");
const { Employee } = require("./models/Employee");
const { Service } = require("./models/Service");
const { ServiceUsage } = require("./models/ServiceUsage");
const { Payment } = require("./models/Payment");

module.exports = {
  hotelDB: {
    Guest,
    RoomType,
    Room,
    Booking,
    Employee,
    Service,
    ServiceUsage,
    Payment,
  },
};
