const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const bodyParser = require("body-parser");
const contactRoutes = require('./routes/contact-route');
const mongodb = require('./Database/db.mongo');
const helmet = require('helmet');
const compression = require('compression');
const RateLimit = require('express-rate-limit');
const db_route = require('./routes/db.route');
const MongoStore = require('rate-limit-mongo');

const limiter = RateLimit({
  store: new MongoStore({
    uri: `mongodb+srv://${process.env.user_mongo}:${process.env.password_mongo}@fabossi-website-7jcsx.mongodb.net/contacts?retryWrites=true&w=majority`
  }),
  max: 200,
  windowMs: 5 * 60 * 1000,
  message:
    "Too many requests, please try again in 15 minutes"
});

const apiLimiter = RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message:
    "Too many requests, please try again after in 15 minutes"
});

app.set('port', process.env.PORT || 4000);
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet.xssFilter());
app.use(helmet.noCache());
app.use(helmet.ieNoOpen());
app.use(helmet.hidePoweredBy());
app.use(helmet.noSniff());
app.use(helmet.frameguard({ action: 'deny' }));
app.use(cors());
app.use('/api/', apiLimiter, contactRoutes);
app.use('/api/', limiter, db_route);
app.use("/", express.static(path.join(__dirname, "public")));
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    styleSrc: ["'self'", 'https://fabossi.s3-sa-east-1.amazonaws.com/'],
    scriptSrc: ["'self'"],
    fontSrc: ["'self'", 'https://fonts.googleapis.com']
  }
}));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

mongodb.initDb((err, db) => {
  if (err) {
    console.error(err);
  } else {
    const server = app.listen(app.get('port'), '0.0.0.0', () => {
      console.log(`Server starting on => ${app.get('port')} `);
    });
    const io = require('socket.io')(server);
    io.on('connection', socket => {
      console.log('Client Connected');
    });
  }
});


