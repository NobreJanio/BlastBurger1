import dotenv from 'dotenv';

dotenv.config();

export default {
  secret: process.env.JWT_SECRET || 'default_secret_key', // Use a chave do .env ou uma chave padrão
  expiresIn: '5d',
};

