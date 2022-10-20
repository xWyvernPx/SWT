const { createServer } = require("http");
const app = require("./src/app");

const server = createServer(app);

const PORT = process.env.DEV_PORT || 4400;
server.listen(PORT, () => {
  console.log("App is listening at port " + PORT);
});
