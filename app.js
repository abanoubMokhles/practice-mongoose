/*-=========== Require External Packages ============-*/
const express = require("express");
const mongoose = require("mongoose");

/*-=========== Database Connection ============-*/
mongoose.connect("mongodb://localhost:27017/grocery");

/*-=========== Collections Schema ============-*/
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  price: {
    type: Number,
    required: [true, "What is the price?"],
  },
  rate: {
    type: Number,
    min: 1,
    max: 10,
  },
});

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  favFruit: fruitSchema,
});
/*-=========== App Collection ============-*/
const Fruit = mongoose.model("Fruit", fruitSchema);

const Person = mongoose.model("Person", personSchema);

/*-=========== Add new Documents ============-*/
const apple = new Fruit({
  name: "Apple",
  price: 3.5,
  rate: 8,
});

const banana = new Fruit({
  name: "Banana",
  price: 2.5,
  rate: 10,
});

const orange = new Fruit({
  name: "Orange",
  price: 3.5,
  rate: 8,
});

const kewi = new Fruit({
  name: "Kewi",
  price: 2.5,
  rate: 10,
});

const james = new Person({
  name: "James",
  favFruit: orange,
});

/*-=========== Inserting new Documents ============-*/

// Person.insertMany([james], function (err) {
//   if (!err) {
//     console.log("Done Successfully");
//     mongoose.connection.close();
//   }
// });

/*-=========== Finding Documents ============-*/
Person.find(function (err, resArr) {
  if (!err) {
    if (resArr) {
      resArr.forEach(function (resDoc) {
        console.log(resDoc);
        mongoose.connection.close();
      });
    }
  }
});

/*-=========== Updating Documents ============-*/
// Fruit.updateMany({ price: { $gt: 1 } }, { rate: 9 }, function (err) {
//   if (!err) {
//     console.log("Done Successfully");
//     mongoose.connection.close();
//   }
// });

/*-=========== Deleting Documents ============-*/
// Fruit.deleteOne({ name: "Orange" }, function (err) {
//   if (!err) {
//     console.log("Success");
//     mongoose.connection.close();
//   }
// });
