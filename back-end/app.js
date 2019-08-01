const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require("body-parser");
const contactRoutes = require('./routes/contact-route');
const mongodb = require('./Database/db.mongo');
const helmet = require('helmet');
const app = express();
const sanitize = require('express-sanitizer');
const express_session = require('express-session');
const RateLimit = require('express-rate-limit');
const MongoStore = require('rate-limit-mongo');

const limiter = RateLimit({
  store: new MongoStore({
    uri: `mongodb+srv://${process.env.user_mongo}:${process.env.password_mongo}@fabossi-website-7jcsx.mongodb.net/contacts?retryWrites=true&w=majority`
  }),
  max: 5,
  windowMs: 15 * 60 * 1000,
  message:
    "Too many requests, please try again after an hour"
});

const apiLimiter = RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message:
    "Too many requests, please try again after in 15 minutes"
});

app.set('port', process.env.PORT || 4000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet.xssFilter());
app.use(helmet.frameguard({ action: 'deny' }));
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    styleSrc: ["'self'"],
    scriptSrc: ["'self'"],
    fontSrc: ["'self'"]
  }
}));
app.use(express_session({
  secret: 'superSecretPassword',
  resave: false,
  saveUninitialized: true
}))
app.use(sanitize());
app.use(cors());
app.use(limiter);
app.use('/api/', apiLimiter, contactRoutes);
app.use("/", express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

mongodb.initDb((err, db) => {
  if (err) {
    console.error(err);
  } else {
    app.listen(app.get('port'), '0.0.0.0', () => {
      console.log(`Server starting on => ${app.get('port')} `);
    })
  }
});


