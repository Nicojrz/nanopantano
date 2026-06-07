const path = require("path");
const express = require("express");
const routes = require("./routes/UserRoutes");
const noCache = require("./middleware/NoCache");
const errorHandler = require("./middleware/ErrorHandler");

require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const app = express();
const port = Number(process.env.PORT || 8080);

app.use(express.static(path.resolve(__dirname, "../public")));
app.use(express.json());
app.use(noCache);
app.use(routes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Servidor backend iniciado en http://localhost:${port}`);
});
