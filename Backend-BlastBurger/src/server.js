import 'dotenv/config'
import app from './app'

// Use a variável de ambiente PORT ou 3002 como padrão
const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}...`);
});