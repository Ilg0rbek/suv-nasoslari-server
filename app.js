import express from "express";
import cors from "cors";
import router from "./routes/index.js";
import session from "express-session";
import cookieParser from "cookie-parser";

const app = express();

//connect ejs
app.set("view engine", "ejs");

//session
const oneDay = 1000 * 60 * 30;
app.use(
  session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false,
  })
);
app.use(cookieParser());

//Middleware function
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));
app.use(router);

app.get("/", (req, res) => {
  res.render("pages/login.ejs");
});

export default app;
