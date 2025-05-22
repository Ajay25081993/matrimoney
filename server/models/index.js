"use strict";

const Sequelize = require("sequelize");
var Schemas = require("./Schemas");
let db = {};
db = Schemas;
db.Sequelize = Sequelize;
module.exports = db;
