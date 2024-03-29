import mongoose from "mongoose";

const userScheme = mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    // validate: {
    //     validator: function(v) {
    //       // Regex to validate email format
    //       return /\S+@\S+\.\S+/.test(v);
    //     },
    //     message: props => `${props.value} is not a valid email address!`
    // }
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
  },
  phoneNumber: {
    type: String,
    trim: true,
  },
  address: {
    type: {
      street: {
        type: String,
        required: true,
        trim: true,
      },
      city: {
        type: String,
        required: true,
        trim: true,
      },
      zip: {
        type: String,
        required: true,
        trim: true,
      },
    },
  },
  role: {
    type: String,
    enum: ["customer", "restaurantAdmin"],
    default: "customer",
  },
  orders: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "order" }],
  },
  numOfOrders: {
    type: Number,
    min: 0,
    default: 0,
  },
  creditCardNumber: {
    type: String,
  },
});

const User = mongoose.model("user", userScheme);
export { User, userScheme };
