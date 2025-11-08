const { model } = require("mongoose");
const { UsersSchema } = require("../schemas/UsersSchema");
const UserModel = new model("user", UsersSchema);
module.exports = UserModel;
