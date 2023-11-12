const express = require("express");
const router = require("./router/sayHello");
const app = express();
const port = 3000;

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
