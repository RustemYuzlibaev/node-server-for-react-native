const fs = require('fs')
const router = require("../api");

const deleteMessage = (req, res) => {
  router.post("/api/data/delete", () => {
    let jsonString = "";

    req.on("data", function(data) {
      jsonString += data;

      fs.writeFile("./database/database.json", jsonString, err => {});
    });

    res.end();
  });
};

module.exports = deleteMessage;
