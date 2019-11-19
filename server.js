const app = require("./src/app");
const port = 4000;

app.listen(port, () => {
  console.log(`Api rodando na porta ${port}`);
});
