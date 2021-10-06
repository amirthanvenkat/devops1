const express = require("express");

const app = express();
const port = process.env.PORT || 8080;


app.get("/", async (req, res) => {
  res.json({ status: "UP" });
});

app.get("/deploy", async (req, res) => {
  res.json({ status: "hi i'm deployed through github actions" });
});

app.get("/fx", (req, res, next) => {
    rand1 = Math.floor(Math.random() * 90) + 10;
    rand2 = Math.floor(Math.random() * 90) + 10;
   
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
   
    res.json({"sell": "489." + rand1, "timestamp": dateTime, "buy": "389." + rand2});
   });

app.listen(port, () => {
  console.log(`App listening on port ` + port);
});