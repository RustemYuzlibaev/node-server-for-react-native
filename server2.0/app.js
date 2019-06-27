const fs = require("fs");
const http = require("http");
const db = require("./database/database");
const getData = require("./api/controllers/getData");
const deleteMessage = require("./api/controllers/deleteMessage");
const addMessage = require("./api/controllers/addMessage");

const PORT = 3000;
const localhost = "192.168.1.10";

const app = http.createServer((req, res) => {
  console.log(req.url);

  switch (req.url) {
    case "/api/data":
      getData(req, res);
      break;
    case "/api/data/add":
      addMessage(req, res);
      break;
    case "/api/data/delete":
      deleteMessage(req, res);
      break;
  }
});

app.listen(PORT, localhost, () => console.log("Listening on port 3000"));

module.exports = app;
