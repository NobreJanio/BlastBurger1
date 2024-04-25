import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import configDatabase from '../config/database';

import User from '../app/models/User';
import Product from '../app/models/Product';
import Category from '../app/models/Category';

const models = [User, Product, Category]; // para  indicar que queremos carregar as modelagens de usuário

class Database {
  constructor() {
    // para  criar a conexão com o banco de dados, vamos precisar da instancia do sequelize.
    this.init(); // para  chamar a função init e realizar a conexão com o banco de dados
    this.mongo()
  }

  init() {
    // para   inicializar a conexão com o banco de dados

    this.connection = new Sequelize(configDatabase); // para criar uma nova conexão com o banco de dados utilizando os parâmetros fornecidos na variável configDatabase.
    models.map((model) => model.init(this.connection)).map( // para passar a conexão (this.connection) para cada modelo, assim eles podem fazer uso dessa conexão para interagir com o banco de dados ou realizar outras operações relacionadas à persistência de dados.
      (model) => model.associate && model.associate(this.connection.models), // avisa ao banco que existe relacionamentos 
    ) 
  }

  mongo() {
    this.mongoConnction = mongoose.connect('mongodb://localhost:27017/devburger')
  }

}
export default new Database();
