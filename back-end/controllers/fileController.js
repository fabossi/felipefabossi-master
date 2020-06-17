const fs = require('fs');
const express = require('express');

exports.createFiles = (req, res) => {

  fs.mkdir('files', function (err) {
    err ? res.status(500).json({ err: err }) : res.status(200);
  });

  // Write File first parameter : Name of File, second one: The File Content

  fs.writeFile('./files/index.html', ``, function (err) {
    if (err) throw res.status(500).json({ err: err });
    res.status(201).json({ msg: 'Files Created' })
  });

  fs.writeFile('./files/index.js', ``, function (err) {
    if (err) throw res.status(500).json({ err: err });
    res.status(201).json({ msg: 'JS File Created' });
  });

  fs.writeFile('./files/styles.css', ``, function (err) {
    if (err) throw res.status(500).json({ err: err });
    res.status(201).json({ msg: 'CSS File Created' });
  });
}

exports.sendFiles = (req, res) => {
  const folders = fs.readdirSync('./files');
  const objArray = [];
  folders.forEach((folder) => {
    const obj = {};
    const files = fs.readdirSync('./files' + folder);
    obj.folder = folder;
    obj.files = files;
    objArray.push(obj);
  });
  res.render('index', { data: JSON.stringify(objArray) });
  fs.unlink('./files');
}

