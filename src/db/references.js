const { Guest } = require("./tables/Guest");
const { RoomType } = require("./tables/RoomType");
const { Room } = require("./tables/Room");
const { Booking } = require("./tables/Booking");
// const { Employee } = require("./tables/Employee");
const { Service } = require("./tables/Service");
const { ServiceUsage } = require("./tables/ServiceUsage");
const { Payment } = require("./tables/Payment");

Room.belongsTo(RoomType);
RoomType.hasMany(Room);

Guest.hasMany(Booking);
Booking.belongsTo(Guest);

Room.hasMany(Booking);
Booking.belongsTo(Room);

Booking.hasMany(ServiceUsage);
ServiceUsage.belongsTo(Booking);

Service.hasMany(ServiceUsage);
ServiceUsage.belongsTo(Service);

Booking.hasMany(Payment);
Payment.belongsTo(Booking);
