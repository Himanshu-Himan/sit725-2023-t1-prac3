const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.json());

const msg = (n1) => {
  return n1;
};

app.get("/sendMessage", (req, res) => {
  const message = req.query.message;
  console.log(`Received message from client: ${message}`);
  const serverResponse = `Server received: "${message}"`;

  res.json({ response: serverResponse });
});

app.post("/sendMessage", express.json(), (req, res) => {
  const message = req.body.message;
  console.log(`Received message from client: ${message}`);

  const serverResponse = `Server received: "${message}"`;

  res.json({ response: serverResponse });
});

app.listen(port, () => {
  console.log("App listening to: " + port);
});
