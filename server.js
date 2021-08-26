require("dotenv").config();
const http = require("http");
const app = require("./app");
const PORT = process.env.PORT || 5000;
const serve = http.createServer(app);

serve.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
