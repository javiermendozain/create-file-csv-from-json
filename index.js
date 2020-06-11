// Dependencies
const fs = require("fs");
const ObjectsToCsv = require("objects-to-csv");

// Reading file JSON
let rawdata = fs.readFileSync("file-resource.json");
let data = JSON.parse(rawdata);

// Convert from Object to Array
let Users = Object.keys(data).map((key) => data[key]);

// Structure Object
let userList = Users.map((item) => ({
  email: item.email,
  name: item.displayName,
  cellphone: item.cellPhone,
}));

// Creat object CSV
const csv = new ObjectsToCsv(userList);

// Written fiel CSV
csv.toDisk("./fileOutPut.csv", { append: true });
