import * as Yup from 'yup';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController {
  async store(request, response) {
    const schema = Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
    });

    const userEmailOrPasswordIncorrect = () => {
      return response
        .status(401)
        .json({ error: 'Wrong email or password, please try again.' });
    };

    if (!(await schema.isValid(request.body))) {
      return userEmailOrPasswordIncorrect();
    }

    const { email, password } = request.body;

    // Verificar se o usuário existe
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return userEmailOrPasswordIncorrect();
    }

    if (!(await user.checkPassword(password))) {
      return userEmailOrPasswordIncorrect();
    }

    // Gerar token
    return response.json({
      id: user.id,
      email,
      name: user.name,
      admin: user.admin,
      token: jwt.sign({ id: user.id, name: user.name }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
