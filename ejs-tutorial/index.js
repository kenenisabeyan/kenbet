const express = require("express");
const path = express();

  const app = express();

  app.set("view engine", "ejs");

  app.set("views", path.join(__dirname, "views"));

  app.get("/", (req, res) => {
    res.render("index", { title: "Home Page" });
  });