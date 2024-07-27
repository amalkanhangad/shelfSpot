const mongoose = require("mongoose");
const order = new mongoose.Schema({
    user:{
        type: mongoose.Types.ObjectId,
        ref:"user",
    },
    books:{
        type: mongoose.Types.ObjectId,
        ref:"books",
    },
    status:{
        type: String,
        default:"Order placed",
        enum:["Order placed", "Out for delivery,Delivered, Canceled"],
    },
},
{timestamps:true}
);

module.exports = ongoose.model("order",order);
