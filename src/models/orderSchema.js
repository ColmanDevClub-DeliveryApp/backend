import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  deliveryPrice: Number,
  dishes: [
    {
      type: [
        {
          id: { type: mongoose.Schema.Types.ObjectId, ref: "dish" },
          quantity: {
            type: Number,
            default: 1,
          },
        },
      ],
    },
  ],
  user: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
  },
  restaurant: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "restaurant" }],
  },
});

const Order = mongoose.model("order", orderSchema);

export { orderSchema, Order };
