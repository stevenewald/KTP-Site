const express = require('express');

const recordRoutes = express.Router();

const dbo = require('../db/conn');

//Create a new user
recordRoutes.route('/express/userLogin').post(function (req, res) {
  const dbConnect = dbo.getDb();

  const matchDocument = {
    email: req.body.email,
    last_modified: new Date(),
  };
 
  dbConnect
    .collection('users')
    .updateOne({email:req.body.email}, {$set:{email: req.body.email, last_modified: new Date()}},
    {upsert: true},
    function (err, result) {
      if (err) {
        res.status(400).send('Error inserting new user!');
      } else {
        console.log(`Added a new user with email ` + req.body.email);
        res.status(204).send();
      }
    });
});

module.exports = recordRoutes;
