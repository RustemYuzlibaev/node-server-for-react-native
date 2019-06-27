const fs = require("fs");
const router = require("../api");
let db = require("../../database/database");

const addMessage = (req, res) => {
  router.post("/api/data/add", () => {
    let jsonString = "";

    req.on("data", function(data) {
      jsonString += data;

      db = [...db, JSON.parse(jsonString)];

      fs.writeFile("./database/database.json", JSON.stringify(db), err => {});
    });

    res.end();
  });
};

module.exports = addMessage;
