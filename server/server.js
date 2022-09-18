const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const csv = require("csvtojson");
const EmpModel = require("./model/CSV");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/reactTemps")
  .then((res) => {
    app.listen(8000, () => {
      console.log("Database connection established");
    });
  })
  .catch((err) => {
    console.log("There was an error connecting to the server");
  });

const destination = path.join(__dirname, "public", "uploads", "csv");

const storage = multer.diskStorage({
  destination: destination,
  filename: (req, file, cb) => {
    cb(null, file.originalname + Date.now() + ".csv");
  },
});

const upload = multer({ storage: storage });

app.post("/api/csv", upload.single("file"), (req, res) => {
  csv()
    .fromFile(req.file.path)
    .then((response) => {
      for (let x = 0; x < response.length; x++) {
        empResponse = parseFloat(response[x].name);
        response[x].name = empResponse;
        empResponse = parseFloat(response[x].email);
        response[x].email = empResponse;
        empResponse = parseFloat(response[x].designation);
        response[x].designation = empResponse;
        empResponse = parseFloat(response[x].mobile);
        response[x].mobile = empResponse;
      }
      EmpModel.insertMany(response)
        .then((result) => {
          console.log(result);
          res.send("File uploaded successfully");
        })
        .catch((err) => {
          console.log(err);
        });
    });
});
