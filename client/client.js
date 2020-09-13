const path = require("path");
const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

app.get("*", (req, res) => {
  res.sendFile(path.resolve("index.html"));
});

app.listen(PORT, error => {
  if (error) {
    console.error(error);
    return process.exit(1);
  } else {
    console.log("Serving static assets on port: " + PORT);
  }
})
