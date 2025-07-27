import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import authMiddleware from './app/middleware/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ProductController from './app/controllers/ProductController';
import CategoryController from './app/controllers/CategoryController';
import OrderController from './app/controllers/OrderController';
import CreatePaymentIntentController from './app/controllers/stripe/CreatePaymentIntentController';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store); // Criar um usuário

routes.post('/session', SessionController.store); // Login

// Rotas públicas para arquivos estáticos (não precisam de autenticação)
routes.get('/products', ProductController.index);
routes.get('/categories', CategoryController.index);

routes.use(authMiddleware); // Verificação de login

routes.post('/products', upload.single('file'), ProductController.store);
routes.put('/products/:id', upload.single('file'), ProductController.update);

routes.post('/categories', upload.single('file'), CategoryController.store);
routes.put('/categories/:id', upload.single('file'), CategoryController.update);

routes.post('/orders', upload.single('file'), OrderController.store);
routes.get('/orders', OrderController.index);
routes.put('/orders/:id', OrderController.update);

routes.post('/create-payment-intent', CreatePaymentIntentController.store);

export default routes;
