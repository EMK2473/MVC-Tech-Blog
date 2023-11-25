//imports
const express = require("express");
const session = require("express-session");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const hbs = exphbs.create({ helpers: require("./utils/helper") });
const app = express();
const PORT = process.env.PORT || 3001;


const sess = {
  secret: "0ae9g7d6xj5l2c8wog8",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
// middleware
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(routes);
app.use(
  session({
    secret: process.env.SECRET,
    store: new SequelizeStore({ db: sequelize }),
    resave: false,
    saveUninitialized: false,
  })
);

// startServer
const startServer = async () => {
  try {
    await sequelize.sync({ force: false });
    app.listen(PORT, () => console.log(`Loud and Clear on PORT ${PORT}`));
  } catch (error) {
    console.error("ERROR syncing database:", error);
  }
};

startServer();
