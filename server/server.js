const express = require("express");
const dotenv = require("dotenv");
const app = express();

// Set process env
dotenv.config({ path: "./config/.env" });

app.listen(() => {
  console.log(`server running on PORT: ${process.env.PORT || 3000}`);
});
