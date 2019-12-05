const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const bodyParser = require("body-parser");
const user_route = require('./routes/user.route');
const contact_route = require('./routes/contact.route');
const mongodb = require('./Database/db.mongo');
const helmet = require('helmet');
const compression = require('compression');
const RateLimit = require('express-rate-limit');
const MongoStore = require('rate-limit-mongo');
const timeout = require('express-timeout-handler');
var originsWhitelist = [
  'http://localhost:4200',
  'https://www.felipefabossi.com',
  'http://www.felipefabossi.com'
];
const corsOptions = {
  origin: function (origin, callback) {
    const isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
    callback(null, isWhitelisted);
  },
  credentials: true
}
const options = {
  timeout: 8000,
  onTimeout: (req, res) => {
    return res.status(503).send({ message: 'This process is taking longer than expected. Please, try again.' });
  },
  disable: ['write', 'setHeaders', 'send', 'json', 'end']
};

const limiter_bd = RateLimit({
  store: new MongoStore({
    uri: `mongodb+srv://${process.env.user_mongo}:${process.env.password_mongo}@fabossi-website-7jcsx.mongodb.net/Fabossi-website?retryWrites=true&w=majority`
  }),
  max: 10,
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
app.use(cors(corsOptions));
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
app.use(timeout.handler(options));
app.use('/api/', apiLimiter, limiter_bd, user_route);
app.use('/api/', apiLimiter, limiter_bd, contact_route);
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
    app.listen(app.get('port'), '0.0.0.0', () => {
      console.log(`Server starting on => ${app.get('port')} `);
    });

  }
});

