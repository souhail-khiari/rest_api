const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
    name: { type: String, required: true },
    age: { type: Number },
});
module.exports = User = mongoose.model("User", UserSchema);
