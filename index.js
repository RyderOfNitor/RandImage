const express = require('express')
const app = express()
const port = process.env.PORT ?? 3000;
const fs = require('fs');
var path = require('path');

files = fs.readdirSync("./images")
console.log(files)

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

app.get('/', (req, res) => {
      var options = {
        root: path.join(__dirname,"images")
    };

    file = getRandomInt(files.length)
    console.log(file)
    var fileName = files[file];
    res.sendFile(path.join(fileName), options, function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log('Sent:', fileName);
        }
    });
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})