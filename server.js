// importing packages and dependencies
const express = require("express");
const session = require("express-session");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const hbs = exphbs.create({ helpers: require("./utils/helper") });
const app = express();
const PORT = process.env.PORT || 3001;
const handlebarsHelpers = require('./utils/helper'); 
const Handlebars = require('handlebars');
Handlebars.registerHelper('eq', handlebarsHelpers.eq);


// sess object
const sess = {
  secret: process.env.SECRET,
  cookie: {
    maxAge: 3000000
  },
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
app.engine('handlebars', exphbs({ helpers: handlebarsHelpers }));
app.set("view engine", "handlebars");
app.use(
  session({
    secret: process.env.SECRET,
    store: new SequelizeStore({ db: sequelize }),
    resave: false,
    saveUninitialized: false,
  })
);
app.use(routes);

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
