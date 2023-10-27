const Hotel = require("../models/Hotel");

//CREATE
const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).send(savedHotel);
  } catch (error) {
    next(error);
  }
};
module.exports = createHotel;

const updateHotel = async (req, res, next) => {
  const id = req.params.id;
  const body = req.body;

  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true }
    );
    res.status(200).send(updatedHotel);
  } catch (error) {
    next(error);
  }
};
module.exports = updateHotel;

const deleteHotel = async (req, res, next) => {
  const id = req.params.id;

  try {
    await Hotel.findByIdAndDelete(id);
    res.status(200).send("Hotel has been deleted.");
  } catch (error) {
    next(error);
  }
};
module.exports = deleteHotel;

//GET
const getHotel = async (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  try {
    const hotel = await Hotel.findById(id);
    console.log(id);
    res.status(200).send(hotel);
  } catch (error) {
    next(error);
  }
};
module.exports = getHotel;

//GET ALL
const getHotels = async (req, res, next) => {
  const id = req.params.id;

  try {
    const hotels = await Hotel.find(id);
    res.status(200).send(hotels);
  } catch (error) {
    next(error);
  }
};
module.exports = getHotels;
