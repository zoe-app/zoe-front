/* eslint-disable class-methods-use-this */
import { LoginPayload } from '../../interfaces';
import { app } from './app';

class AuthService {
  async login(email: string, password: string): Promise<LoginPayload> {
    const res = await app.post('/login', { email, password });
    return res.data;
  }
}

const authService = new AuthService();
export { authService };
