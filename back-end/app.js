const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require("body-parser");
const contactRoutes = require('./routes/contact-route');
const mongodb = require('./Database/db.mongo');
const app = express();


app.set('port', process.env.PORT || 4000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

mongodb.connectMongo();

app.use('/api/', contactRoutes);
app.use("/", express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(app.get('port'), '0.0.0.0', () => {
  console.log(`Server starting on => ${app.get('port')} `);
})

