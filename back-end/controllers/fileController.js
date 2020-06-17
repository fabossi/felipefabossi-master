const fs = require('fs');

exports.createFiles = (req, res) => {

  // Write File first parameter : Name of File, second one: The File Content

  fs.writeFile('index.html', ``, function (err) {
    if (err) throw res.status(500).json({ err: err });
    res.status(201).json({ msg: 'Html File Created' })
  });

  fs.writeFile('index.js', ``, function (err) {
    if (err) throw res.status(500).json({ err: err });
    res.status(201).json({ msg: 'JS File Created' });
  });

  fs.writeFile('styles.css', ``, function (err) {
    if (err) throw res.status(500).json({ err: err });
    res.status(201).json({ msg: 'CSS File Created' });
  });
}
