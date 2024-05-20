const Room = require("./../db/models/Room");

// console.log('hotelDB:');
// console.log(hotelDB);
// const { Room } = hotelDB;
console.log("Room:");
console.log(Room);

const getAll = async () => {
  const rooms = await Room.getRooms();

  return rooms;
};

const getById = async (id) => {
  const room = await Room.getRoomById(id);

  return room;
};

const create = async (roomData) => {
  const room = await Room.createRoom(roomData);

  return room;
};

const update = async (id, newData) => {
  const newRoom = await Room.updateRoom(id, newData);

  return newRoom;
};

const remove = async (id) => {
  await Room.deleteRoom(id);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
