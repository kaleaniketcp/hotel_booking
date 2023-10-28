import Hotel from "../models/Hotel.js";

//CREATE
export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).send(savedHotel);
  } catch (error) {
    next(error);
  }
};

export const updateHotel = async (req, res, next) => {
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

export const deleteHotel = async (req, res, next) => {
  const id = req.params.id;

  try {
    await Hotel.findByIdAndDelete(id);
    res.status(200).send("Hotel has been deleted.");
  } catch (error) {
    next(error);
  }
};

//GET
export const getHotel = async (req, res, next) => {
  const id = req.params.id;
  try {
    const hotel = await Hotel.findById(id);
    res.status(200).send(hotel);
  } catch (error) {
    next(error);
  }
};

//GET ALL
export const getHotels = async (req, res, next) => {
  const id = req.params.id;

  try {
    const hotels = await Hotel.find(id);
    res.status(200).send(hotels);
  } catch (error) {
    next(error);
  }
};
