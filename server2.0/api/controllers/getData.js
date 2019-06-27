const router = require("../api");
const db = require("../../database/database");

const getData = (req, res) => {
  router.get("/api/data", () => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(db));
  });
};

module.exports = getData;
