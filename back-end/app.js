const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const bodyParser = require("body-parser");
const contactRoutes = require('./routes/contact-route');
const mongodb = require('./Database/db.mongo');
const helmet = require('helmet');
const RateLimit = require('express-rate-limit');
const MongoStore = require('rate-limit-mongo');
const limiter = RateLimit({
  store: new MongoStore({
    uri: `mongodb+srv://${process.env.user_mongo}:${process.env.password_mongo}@fabossi-website-7jcsx.mongodb.net/contacts?retryWrites=true&w=majority`
  }),
  max: 100,
  windowMs: 15 * 60 * 1000,
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


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet.xssFilter());
app.use(helmet.frameguard({ action: 'deny' }));
app.use(cors());
app.use('/api/', apiLimiter, contactRoutes);
app.use(limiter);
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
    })
  }
});


