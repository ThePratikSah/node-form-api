const path = require('path');
const express = require("express");
const multer = require('multer');
const sequelize = require("./util/database");
const helmet = require('helmet');
const compression = require('compression');

if (process.env.NODE_ENV !== 'production') {
  require("dotenv").config();
}

const User = require("./models/user-model");
const Form = require("./models/form-model");

const port = process.env.PORT || 3300;

const app = express();

// import all error controllers here
const corsError = require("./middleware/error-handlers/cors-err");
const centralError = require("./middleware/error-handlers/err");

// all routes here
const authRoutes = require("./routes/auth-routes");
const userRoutes = require("./routes/user-routes");

//multer file storage
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
  },
});

//multer file filter
const fileFilter = (req, file, cb) => {
  if (
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/jpeg'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname));

// multer configuration
app.use(
    multer({
      storage: fileStorage,
      fileFilter: fileFilter,
    }).single('image')
);

app.use('/images', express.static(path.join(__dirname, 'images')));

//handling the cors error here
app.use(corsError.corsErr);

app.use("/auth", authRoutes);
app.use("/user", userRoutes);

app.use(helmet());
app.use(compression());

//central error handling middleware
app.use(centralError.getError);

// sync with database
sequelize
    .sync()
    .then(() => {
      app.listen(port);
    })
    .catch((err) => {
      console.log(err);
    });
