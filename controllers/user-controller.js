const Form = require("../models/form-model");

exports.submitForm = async (req, res, next) => {
  const image = req.file;
  let imageURL = '';
  if (image) {
    imageURL = req.file.path;
  } else {
    return res.status(404).json({
      msg: 'No image provided',
    });
  }
  //fetch the id from the req body
  const {fromLat, fromLng, imageDesc} = req.body;
  try {
    const userId = req.userId;
    await Form.create({
      userId, fromLat, fromLng, imageURL, imageDesc
    });
    res.status(201).json({msg: `Form submitted`});
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}
