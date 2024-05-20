const { Room } = require("../db/models/Room");
const { RoomType } = require("../db/models/RoomType");
const { Employee } = require("../db/models/Employee");
const { Service } = require("../db/models/Service");
const { ServiceUsage } = require("../db/models/ServiceUsage");
const { Payment } = require("../db/models/Payment");
const { Guest } = require("../db/models/Guest");
const { Booking } = require("../db/models/Booking");

Room.sync({ alter: true });
RoomType.sync({ alter: true });
Employee.sync({ alter: true });
Service.sync({ alter: true });
ServiceUsage.sync({ alter: true });
Payment.sync({ alter: true });
Guest.sync({ alter: true });
Booking.sync({ alter: true });
