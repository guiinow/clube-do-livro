import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAssociateDto } from './dto/create-associate.dto';
import { UpdateAssociateDto } from './dto/update-associate.dto';
import { AssociateEntity } from './entities/associate.entity';

@Injectable()
export class AssociateService {
  constructor(@Inject('DATABASE_CONNECTION') private readonly connection: any) {}

  private associates: AssociateEntity[] = [];
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

  async create(createAssociateDto: CreateAssociateDto): Promise<any> {
    const result = await this.connection
      .query('INSERT INTO associate (id, name, email, phone, address, password) VALUES ($1, $2, $3, $4, $5, $6)', [
        createAssociateDto.id,
        createAssociateDto.name,
        createAssociateDto.email,
        createAssociateDto.phone,
        createAssociateDto.address,
        createAssociateDto.password,
      ])
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
  
    return result;
  }
  

  async findAll() {
    const result = await this.connection
    .query(`SELECT * FROM associate`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });

    return result.rows;
  }

  async findOne(id: number) {
    const result = await this.connection
    .query(`SELECT * FROM ASSOCIATE WHERE id = $1`, [id])
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });

    return result.rows[0];
    
  }

  update(id: number, updateAssociateDto: UpdateAssociateDto) {
    const associate = this.findOne(id);
    const newAssociate = {
      ...associate,
      ...updateAssociateDto,
    };

    const index = this.associates.findIndex((associate) => associate.id === id);


    return newAssociate;
  }

  remove(id: number) {
    const index = this.associates.findIndex((associate) => associate.id === id);

    if(index === -1) {
      throw new NotFoundException('User with this id does not exists')
    }

    this.associates.splice(index, 1);

    return `This action removes a #${id} associate`;
  }
}
