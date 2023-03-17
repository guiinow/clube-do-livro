import { Inject,Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World, this is nos';
  }
  constructor(@Inject('DATABASE_CONNECTION') private readonly connection: any) {}

  async login(email: string, password: string): Promise<any> {
    try {
      const result = await this.connection.query('SELECT * FROM associate WHERE email = $1 AND password = $2', [email, password]);
      if (result.rows.length === 0) {
        return 'User not found';
      }
      return result.rows;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
