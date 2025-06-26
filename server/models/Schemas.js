"use strict";
import { Sequelize } from "sequelize";
import config from "../config/config.js";
const sequelize = new Sequelize(
  config.sql.database,
  config.sql.username,
  config.sql.password,
  {
    host: config.sql.host,
    port: config.sql.port,
    dialect: config.sql.dialect,
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    timezone: config.sql.timezone,
    define: {
      underscored: true,
      timestamps: true,
      charset: "utf8",
      collate: "utf8_general_ci",
      freezeTableName: true,
    },
  }
);
//--------------- Start of User Table --------------
const User = sequelize.define(
  "User",
  {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },

    firstName: Sequelize.STRING(30),
    lastName: Sequelize.STRING(30),
    dob: Sequelize.STRING(30),
    age: Sequelize.STRING(4),
    religion: Sequelize.STRING(30),
    community: Sequelize.STRING(30),
    state: Sequelize.STRING(30),
    email: Sequelize.STRING(50),
    phoneNo: Sequelize.STRING(15),
    password: Sequelize.STRING(128),
    gender: Sequelize.STRING(10),
    createdFor: Sequelize.STRING(20),
    profilePic: Sequelize.TEXT(),
    profile_type: Sequelize.STRING(10),

    company: Sequelize.STRING(30),
    is_deleted: {
      type: Sequelize.TINYINT(1),
      defaultValue: 0,
    },
  },
  {
    tableName: "users",
    underscored: true,
  }
);

const Info = sequelize.define(
  "Info",
  {
    user_id: { type: Sequelize.INTEGER, allowNull: false },
    qualification: Sequelize.STRING(15),
    college: Sequelize.STRING(30),
    workWith: Sequelize.STRING(30),
    workAs: Sequelize.STRING(30),
    company: Sequelize.STRING(50),
    income: Sequelize.STRING(30),
    languageKnown: Sequelize.STRING(30),
    city: Sequelize.STRING(15),
    liveWithFamily: Sequelize.STRING(15),
    maritalStatus: Sequelize.STRING(15),
    children: Sequelize.STRING(15),
    diet: Sequelize.STRING(15),
    drinkingHabit: Sequelize.STRING(50),
    smokingHabit: Sequelize.STRING(50),
    height: Sequelize.STRING(10),
    weight: Sequelize.STRING(10),
    physicalStatus: Sequelize.STRING(30),
    subCommunity: Sequelize.STRING(15),
    casteMatters: Sequelize.STRING(15),
    aboutMe: Sequelize.STRING(4000),
    mother: Sequelize.STRING(10),
    father: Sequelize.STRING(10),
    noOfSister: Sequelize.STRING(10),
    noOfBrother: Sequelize.STRING(10),
    address_modified: { type: Sequelize.BOOLEAN, defaultValue: false },
    is_deleted: {
      type: Sequelize.TINYINT(1),
      defaultValue: 0,
    },
  },
  {
    tableName: "infos",
    underscored: true,
  }
);

const Verified = sequelize.define(
  "Verified",
  {
    user_id: { type: Sequelize.INTEGER, allowNull: false },
    code: Sequelize.STRING(36),
    status: Sequelize.BOOLEAN,
    is_deleted: {
      type: Sequelize.TINYINT(1),
      defaultValue: 0,
    },
  },
  {
    tableName: "verified",
    underscored: true,
  }
);

const Block = sequelize.define(
  "Block",
  {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    blocker_id: { type: Sequelize.INTEGER, allowNull: false },
    blocked_id: { type: Sequelize.INTEGER, allowNull: false },
    is_deleted: {
      type: Sequelize.TINYINT(1),
      defaultValue: 0,
    },
  },
  {
    tableName: "blocks",
    underscored: true,
  }
);

const Report = sequelize.define(
  "Report",
  {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    reported_id: { type: Sequelize.INTEGER, allowNull: false },
    reporter_id: { type: Sequelize.INTEGER, allowNull: false },
    is_deleted: {
      type: Sequelize.TINYINT(1),
      defaultValue: 0,
    },
  },
  {
    tableName: "reports",
    underscored: true,
  }
);

const Like = sequelize.define(
  "Like",
  {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    liker_id: { type: Sequelize.INTEGER, allowNull: false },
    liked_id: { type: Sequelize.INTEGER, allowNull: false },
    is_deleted: {
      type: Sequelize.TINYINT(1),
      defaultValue: 0,
    },
  },
  {
    tableName: "likes",
    underscored: true,
  }
);

const Dislike = sequelize.define(
  "Dislike",
  {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    disliker_id: { type: Sequelize.INTEGER, allowNull: false },
    disliked_id: { type: Sequelize.INTEGER, allowNull: false },
    is_deleted: {
      type: Sequelize.TINYINT(1),
      defaultValue: 0,
    },
  },
  {
    tableName: "dislikes",
    underscored: true,
  }
);

const Visit = sequelize.define(
  "Visit",
  {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    visiter_id: { type: Sequelize.INTEGER, allowNull: false },
    visited_id: { type: Sequelize.INTEGER, allowNull: false },
    time: { type: Sequelize.DATE, allowNull: false },
    is_deleted: {
      type: Sequelize.TINYINT(1),
      defaultValue: 0,
    },
  },
  {
    tableName: "visits",
    underscored: true,
  }
);

const Photo = sequelize.define(
  "Photo",
  {
    user_id: { type: Sequelize.INTEGER, allowNull: false },
    pic1: Sequelize.STRING(256),
    pic2: Sequelize.STRING(256),
    pic3: Sequelize.STRING(256),
    pic4: Sequelize.STRING(256),
    pic5: Sequelize.STRING(256),
    is_deleted: {
      type: Sequelize.TINYINT(1),
      defaultValue: 0,
    },
  },
  {
    tableName: "photos",
    underscored: true,
  }
);

const Message = sequelize.define(
  "Message",
  {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    sender_id: { type: Sequelize.INTEGER, allowNull: false },
    receiver_id: { type: Sequelize.INTEGER, allowNull: false },
    message: { type: Sequelize.STRING(256), allowNull: false },
    time: { type: Sequelize.DATE, allowNull: false },
    is_deleted: {
      type: Sequelize.TINYINT(1),
      defaultValue: 0,
    },
  },
  {
    tableName: "messages",
    underscored: true,
  }
);

const Setting = sequelize.define(
  "Setting",
  {
    user_id: { type: Sequelize.INTEGER, allowNull: false },
    visit: { type: Sequelize.BOOLEAN, defaultValue: true },
    like: { type: Sequelize.BOOLEAN, defaultValue: true },
    unlike: { type: Sequelize.BOOLEAN, defaultValue: true },
    match: { type: Sequelize.BOOLEAN, defaultValue: true },
    message: { type: Sequelize.BOOLEAN, defaultValue: true },
    is_deleted: {
      type: Sequelize.TINYINT(1),
      defaultValue: 0,
    },
  },
  {
    tableName: "settings",
    underscored: true,
  }
);

const Notif = sequelize.define(
  "Notif",
  {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: Sequelize.INTEGER, allowNull: false },
    notifier_name: Sequelize.STRING(24),
    type: { type: Sequelize.STRING(12), allowNull: false },
    content: { type: Sequelize.STRING(64), allowNull: false },
    time: { type: Sequelize.DATE, allowNull: false },
    read: { type: Sequelize.BOOLEAN, defaultValue: false },
    is_deleted: {
      type: Sequelize.TINYINT(1),
      defaultValue: 0,
    },
  },
  {
    tableName: "notif",
    underscored: true,
  }
);

const Interest = sequelize.define(
  "Interest",
  {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: Sequelize.INTEGER, allowNull: false },
    tag: Sequelize.STRING(24),
    is_deleted: {
      type: Sequelize.TINYINT(1),
      defaultValue: 0,
    },
  },
  {
    tableName: "interests",
    underscored: true,
  }
);
const Connection = sequelize.define(
  "Connection",
  {
    user_id: { type: Sequelize.INTEGER, allowNull: false },
    last_connection: Sequelize.DATE,
    is_deleted: {
      type: Sequelize.TINYINT(1),
      defaultValue: 0,
    },
  },
  {
    tableName: "conections",
    underscored: true,
  }
);

User.hasOne(Info, { foreignKey: "user_id" });
User.hasMany(Like, { foreignKey: "liker_id" });
Info.belongsTo(User, { as: "User", foreignKey: "user_id" });

// In models/Schemas.js or corresponding model files
Like.belongsTo(User, { foreignKey: "liked_id", as: "likedUser" });
Dislike.belongsTo(User, { foreignKey: "disliked_id", as: "dislikedUser" });
Block.belongsTo(User, { foreignKey: "blocked_id", as: "blockedUser" });
Report.belongsTo(User, { foreignKey: "reported_id", as: "reportedUser" });
Connection.belongsTo(User, { foreignKey: "user_id", as: "user" });
Visit.belongsTo(User, { foreignKey: "visited_id", as: "visited" });
Photo.belongsTo(User, { foreignKey: "user_id", as: "user" });
User.hasOne(Photo, { foreignKey: "user_id", as: "photo" });

export {
  sequelize,
  User,
  Info,
  Verified,
  Block,
  Report,
  Like,
  Dislike,
  Visit,
  Photo,
  Message,
  Setting,
  Notif,
  Interest,
  Connection,
};
