import * as Yup from 'yup';
import Category from '../models/Category';
import User from '../models/User';

class CategoryController {
  async store(request, response) {
    // Método assíncrono para armazenar uma nova categoria
    const schema = Yup.object().shape({
      // Define o esquema de validação usando Yup
      name: Yup.string().required(), // O campo 'name' é uma string e é obrigatório
    });

    try {
      await schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    const { admin: isAdmin } = await User.findByPk(request.userId);

    if (!isAdmin) {
      // Se não for administrador
      return response.status(401).json({ error: 'User not authorized.' }); // Retorna erro de autorização
    }

    const { filename: path } = request.file;
    const { name } = request.body; // Obtém o nome da categoria da requisição

    const categoryExists = await Category.findOne({
      // Verifica se a categoria já existe
      where: {
        name,
      },
    });

    if (categoryExists) {
      // Se a categoria já existir
      return response.status(400).json({ error: 'Category already exists.' });
    }

    const { id } = await Category.create({
      name,
      path,
    }); // Cria a nova categoria no banco de dados

    return response.json({ id, name }); // Retorna os dados da nova categoria criada
  }

  async update(request, response) {
    // Método assíncrono para armazenar uma nova categoria
    const schema = Yup.object().shape({
      // Define o esquema de validação usando Yup
      name: Yup.string(), // O campo 'name' é uma string e é obrigatório
    });

    try {
      await schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    const { admin: isAdmin } = await User.findByPk(request.userId);

    if (!isAdmin) {
      // Se não for administrador
      return response.status(401).json({ error: 'User not authorized.' }); // Retorna erro de autorização
    }

    const { id } = request.params;

    const categoryExists = await Category.findByPk(id);

    if (!categoryExists) {
      // Se a categoria não existir
      return response
        .status(401)
        .json({ error: 'Make sure this category exists.' });
    }

    let path; // Declara a variável 'path'
    if (request.file) {
      // Se houver arquivo na requisição
      path = request.file.filename; // Obtém o novo caminho do arquivo
    }

    const { name } = request.body; // Obtém o nome da categoria da requisição

    if (name) {
      const categoryNameExists = await Category.findOne({
        // Verifica se a categoria já existe
        where: {
          name,
        },
      });

      if (categoryNameExists && categoryNameExists.id !== +id) {
        return response.status(400).json({ error: 'Category already exists.' });
      }
    }

    await Category.update(
      {
        name,
        path,
      },
      {
        where: {
          id,
        },
      },
    );

    return response.status(200).json(); // Retorna os dados da nova categoria criada
  }

  async index(request, response) {
    // Método assíncrono para listar todas as categorias
    const categories = await Category.findAll(); // Busca todas as categorias no banco de dados

    return response.json(categories); // Retorna as categorias encontradas
  }
}

export default new CategoryController(); // Exporta uma instância do CategoryController
