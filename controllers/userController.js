import { User } from "../models/userModel.js";

class Users {
  static Login = async (req, res) => {
    const { username, password } = req.body;
    req.session.isLogin = true;
    const user = await User.findOne({ username });
    if (!user) return res.send("Username yoki password notog'ri");
    res.redirect("/products");
  };
  // static SignUp = async (req, res) => {
  //   const { username, password } = req.body;
  //   const newAdmin = new User({
  //     username,
  //     password,
  //   });
  //   await newAdmin.save();
  //   res.status(200).json({ msg: "200 ok", newAdmin });
  // };
}

export default Users;
