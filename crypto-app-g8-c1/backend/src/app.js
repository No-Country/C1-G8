const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const cryptoRoutes = require("./routes/coins.routes");
const db = require("./db/db");
const userRoutes = require("./routes/user.routes");
const walletrouter = require("./routes/wallet.routes")
const session = require("express-session");


//setting config
app.set("name", "Server");
app.set("port", process.env.PORT || 4000);

//database connection
db();

//middlewares
app.use(express.json());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,}))
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

//routes
app.use("/api", cryptoRoutes);
app.use("/api", userRoutes);
app.use("/api", walletrouter);


module.exports = app;
