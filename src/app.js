const express = require("express");
require("express-async-erros");

require("./config/db");

const app = express();
const router = require("./routes");

app.use(express.json());
app.use(router);

app.use((err, req, res, next) => {
   console.log(err);
   res.status(500).send({ error: "Ocorreu um erro!" });
});

app.get("/", (req, res) => {
   res.send({ message: "Seja bem vindo(a) a API Classic Models" });
});

app.listen(3000, () => {
   console.log("✅ Server is Running!");
});
