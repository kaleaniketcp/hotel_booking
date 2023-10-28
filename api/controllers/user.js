import User from "../models/User.js";

export const updateUser = async (req, res, next) => {
  const id = req.params.id;
  const body = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true }
    );
    res.status(200).send(updatedUser);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(id);
    res.status(200).send("User has been deleted.");
  } catch (error) {
    next(error);
  }
};

//GET
export const getUser = async (req, res, next) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
};

//GET ALL
export const getUsers = async (req, res, next) => {
  const id = req.params.id;

  try {
    const users = await User.find(id);
    res.status(200).send(users);
  } catch (error) {
    next(error);
  }
};
