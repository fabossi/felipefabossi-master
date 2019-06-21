const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const fs = require("fs");
const certFileBuff = fs.readFileSync("./file-terc/cert.pem");
const contactRoutes = require('./routes/contact-route');

const app = express();
app.set('port', process.env.PORT || 4000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());


mongoose
  .connect(
    "mongodb://dbaas18.hyperprotectdbaas.cloud.ibm.com:27049,dbaas17.hyperprotectdbaas.cloud.ibm.com:27162,dbaas19.hyperprotectdbaas.cloud.ibm.com:27113/admin?replicaSet=fabossi-dbas",
    {
      useNewUrlParser: true,
      ssl: true,
      user: "fabossi",
      pass: "Brenner286",
      sslCA: certFileBuff
    }

  )
  .then(() => {
    console.log("Connection Success.");
  })
  .catch(error => {
    console.error("Connection Failed.", error);
  });

app.use('/api/', contactRoutes);

app.use("/", express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(app.get('port'), '0.0.0.0', () => {
  console.log(`Server starting on => ${app.get('port')} `);
})

