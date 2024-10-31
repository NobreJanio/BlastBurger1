import express from 'express';
import { resolve } from 'node:path';
import cors from 'cors'
import routes from './routes';
import 'dotenv/config';
import './database';

class App {
  constructor() {
    this.app = express();
    this.app.use(cors());
    this.middlewares();
    this.routes();

  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(
      '/product-file',
      express.static(resolve(__dirname, '..', 'uploads')),
    );

    this.app.use(
      '/category-file',
      express.static(resolve(__dirname, '..', 'uploads')),
    );
  }

  routes() {
    this.app.use(routes);
  }

  // Novo método para iniciar o servidor
  start() {
    const PORT = process.env.PORT || 3000; // Usa a porta do Render ou 3000 como padrão
    this.app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }
}

export default new App().app;
