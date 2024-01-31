import BRreg from "../models/BRreg.model.js";

export const biblereadingreg = async (req, res, next) => {
  try {
    const {
      email,
      qualification,
      surname,
      firstname,
      locality,
      status,
      grade,
      attended,
      school,
      contact,
      amen
    } = req.body;

    // Create a new BRreg instance with the received data
    const newRegistration = new BRreg({
      email,
      qualification,
      surname,
      firstname,
      locality,
      status,
      grade,
      attended,
      school,
      contact,
      amen
    });

    // Save the data to the database
    await newRegistration.save();

    return res.status(200).json({
      success: true,
      message: "Registration successful"
    });
  } catch (error) {
    // Pass the error to the error handler middleware
    return next(error);
  }
};
