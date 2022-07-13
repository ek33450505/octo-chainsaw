const path = require('path');
const express = require('express');
const session = require('express-session');
const cors = require('cors')


const app = express();

const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: process.env.SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors())

// Serve up static assets - update the back-end server's code to serve up the React front-end code in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

}

app.use(require('./controllers/'));


app.get('*', (req, res) => {
  console.log("prod get " + path.join(__dirname, '../client/build/index.html'))
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

