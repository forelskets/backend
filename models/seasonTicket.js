const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const seasonTicket = new Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "user" },
    ticketId: { type: String, required: true },
    price: { type: Number, required: true },
    source: {
      type: String,
      default: null,
    },
    sourceCRSCode: {
      type: String,
      default: null,
    },
    destination: {
      type: String,
      default: null,
    },
    destinationCRSCode: {
      type: String,
      default: null,
    },
    passengerType: { type: String, default: null },
    duration: { type: Number, default: null },
    financeBy: { type: String, default: null },
    paymentType: { type: String, default: null },
    isApproved: { type: Boolean, default: false },
    isRejected: { type: Boolean, default: false },
    isPending: { type: Boolean, default: true },
    validUpto: { type: Date, required: true },
    startDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("seasonTicket", seasonTicket);
