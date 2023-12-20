const cors = require("cors");
const express = require("express");
const router = require("./routes/routes");

const app = express();

app.use(cors());
app.use("/api/", router);

const PORT = 2040;

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
