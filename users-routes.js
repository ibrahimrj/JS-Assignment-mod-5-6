const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const UserModel = require("../models/UserModel.js");

router.post("/registeration", (req, res) => {
  let newDocumment = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    subscription: req.body.subscription,
  };

  UserModel.create(newDocumment)
    .then((dbDocumment) => {
      res.json(dbDocumment);
    })
    .catch((error) => {
      console.log("Registration Error", error);
      res.send("An Error occurred");
    });
});

router.get("/find", (req, res) => {
  const { email } = req.body;
  UserModel.find({ email })
    .then((dbDocumment) => {
      res.json(dbDocumment);
    })
    .catch((error) => {
      console.log("/find error", error);
      res.send("An error occured");
    });
});

router.put("/preferences", (req, res) => {
  let newDocumment = {};

  if (req.body.firstName) {
    newDocumment["firstName"] = req.body.firstName;
  }
  if (req.body.lastName) {
    newDocumment["lastName"] = req.body.lastName;
  }
  if (req.body.phone) {
    newDocumment["phone"] = req.body.phone;
  }
  if (req.body.subscription) {
    newDocumment["subscription"] = req.body.subscription;
  }

  UserModel.findOneAndUpdate(
    {
      email: req.body.email,
    },
    {
      $set: newDocumment,
    },
    {
      new: true,
    }
  )
    .then((dbDocumment) => {
      res.json(dbDocumment);
    })
    .catch((error) => {
      console.log("/user/update error", error);
      res.send("An Error Occured!");
    });
});

module.exports = router;
