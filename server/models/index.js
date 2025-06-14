"use strict";
import { Sequelize } from "sequelize";
import * as Schemas from "./Schemas.js";
const db = { ...Schemas, Sequelize };
export default db;
