const express = require("express"); 
const app = express();
const port = 2023;
const env = require("dotenv");

env.config({ path: "./.env" });

app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
app.set("view engine", "hbs");

app.use("/", require("./routes/accountRoutes"));
app.use("/auth", require("./routes/auth"));

app
  .listen(port, () => {
    //Message when successfully connected to the ExpressJS Server
    console.log(`\nServer successfully started\nPort: ${port}`);
  })
  //This execute if failed to connect to server
  .on("error", (err) => {
    console.error(`Server failed to start\n${err}`);
  });