/* eslint-disable class-methods-use-this */
import { LoginPayload, RegisterDto, RegisterPayload } from '../../interfaces';
import { app } from './app';

class AuthService {
  async login(email: string, password: string): Promise<LoginPayload> {
    const res = await app.post('/login', { email, password });
    return res.data;
  }

  async register(dto: RegisterDto): Promise<RegisterPayload> {
    const { name, lastName, email, password } = dto;
    const res = await app.post('/register', {
      name,
      lastName,
      email,
      password,
    });

    return res.data;
  }
}

const authService = new AuthService();
export { authService };
