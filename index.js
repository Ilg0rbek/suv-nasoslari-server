import mongoose from "mongoose";
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 4040;
const password = process.env.MONGODB_PASSWORD;

(async () => {
  try {
    mongoose.connect(
      `mongodb+srv://authUser:${password}@cluster0.apnc6ah.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("Connect to mongodb ✅");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} 💻`);
    });
  } catch (err) {
    console.log("error: " + err.message + " ❌");
  }
})();
