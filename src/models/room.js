"use strict";

const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */
// Pizza Model:

const RoomSchema = new mongoose.Schema(
  {
    roomNumber: {
      type: Number,
      required: true,
      unique: true,
    },

    images: [],

    bedType: {
      type: Number,
      required: true,
      enum: [1, 2, 3, 4],
    },
    price: { type: String, required: true },
  },
  {
    collection: "rooms",
    timestamps: true,
  }
);

// Model:
module.exports = mongoose.model("Room", RoomSchema);
