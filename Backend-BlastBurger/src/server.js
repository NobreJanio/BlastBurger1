const app = require('./app');

// Use a variável de ambiente PORT ou 3001 como padrão
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}...`);
});