const { Room } = require("../db/models/Room");
const { RoomType } = require("../db/models/RoomType");
const { Employee } = require("../db/models/Employee");
const { Service } = require("../db/models/Service");
const { ServiceUsage } = require("../db/models/ServiceUsage");
const { Payment } = require("../db/models/Payment");
const { Guest } = require("../db/models/Guest");
const { Booking } = require("../db/models/Booking");

Room.sync({ force: true });
RoomType.sync({ force: true });
Employee.sync({ force: true });
Service.sync({ force: true });
ServiceUsage.sync({ force: true });
Payment.sync({ force: true });
Guest.sync({ force: true });
Booking.sync({ force: true });
