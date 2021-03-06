const Datastore = require("nedb-promise");
const users = new Datastore({
  filename: "./db/myddata.db",
  autoload: true,
});
// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  //REGISTER NEW USER
  async register(body) {
    if (body.password === body.repeatPassword) {
      const user = await users.findOne({ email: body.email });
      if (user) {
        return false;
      } else {
        const newUser = {
          email: body.email,
          password: body.password,
          role: "customer",
          name: body.name,
        };
        console.log("user.js register ", newUser);
        return await users.insert(newUser);
      }
    } else {
      return false;
    }
  },
  //AUTHORIZED USERS
  async login(body) {
    const user = await users.findOne({ email: body.email });
    if (!user) {
      return false;
    } else {
      if (user) {
        const secret = process.env.SECRET;
        const payload = {
          userID: user._id,
          role: user.role,
        };
        const token = jwt.sign(payload, secret);
        return {
          token: token,
          user: {
            email: user.email,
            name: user.name,
            role: user.role,
          },
        };
      } else {
        return false;
      }
    }
  },
};
