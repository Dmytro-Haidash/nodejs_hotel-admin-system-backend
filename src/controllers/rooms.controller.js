const roomsService = require("../services/rooms.service");

const get = async (_, res) => {
  const rooms = await roomsService.getAll();

  res.status(200).send(rooms);
};

const getOne = async (req, res) => {
  const { id } = req.params;
  const room = await roomsService.getById(id);

  if (!room) {
    res.sendStatus(404);
  }

  res.status(200).send(room);
};

const create = async (req, res) => {
  const { roomNumber, floor, capacity, pricePerNight, status } = req.body;

  if (!roomNumber || !floor || !capacity || !pricePerNight || !status) {
    res.sendStatus(400);

    return;
  }

  const roomData = {
    roomNumber,
    floor,
    capacity,
    pricePerNight,
    status,
  };

  const room = await roomsService.create(roomData);

  res.status(201).send(room);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { roomNumber, floor, capacity, pricePerNight, status } = req.body;

  const fields = {
    roomNumber,
    floor,
    capacity,
    pricePerNight,
    status,
  };

  const roomData = Object.entries(fields).reduce((acc, [key, value]) => {
    if (value !== undefined) {
      acc[key] = value;
    }

    return acc;
  }, {});

  const room = await roomsService.getById(id);

  if (!room) {
    res.sendStatus(404);

    return;
  }

  if (!Object.keys(roomData).length) {
    res.sendStatus(400);

    return;
  }

  const newRoom = await roomsService.update(id, roomData);

  res.status(200).send(newRoom);
};

const remove = (req, res) => {
  const { id } = req.params;

  if (!roomsService.getById(id)) {
    res.sendStatus(404);

    return;
  }

  roomsService.remove(id);
  res.sendStatus(204);
};

module.exports = {
  get,
  getOne,
  create,
  update,
  remove,
};
