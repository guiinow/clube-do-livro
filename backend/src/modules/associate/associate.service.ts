import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAssociateDto } from './dto/create-associate.dto';
import { UpdateAssociateDto } from './dto/update-associate.dto';
import { AssociateEntity } from './entities/associate.entity';
const {Pool } = require('pg')

@Injectable()
export class AssociateService {
  constructor(@Inject('DATABASE_CONNECTION') private readonly connection: any) {}

  private associates: AssociateEntity[] = [];
  
  
  async create(createAssociateDto: CreateAssociateDto): Promise<any> {
    const result = await this.connection
      .query('INSERT INTO associates (id, name, email, password, address) VALUES ($1, $2, $3, $4, $5)', [
        createAssociateDto.id,
        createAssociateDto.name,
        createAssociateDto.email,
        createAssociateDto.password,
        createAssociateDto.address,
      ])
      .then((res) => {
        console.log('Connected', res);
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
    .query(`SELECT * FROM associate`);

    return result.rows;
  }

  findOne(id: number) {
    const index = this.associates.findIndex((associate) => associate.id === id);
    
    return this.associates[index];
    
  }

  update(id: number, updateAssociateDto: UpdateAssociateDto) {
    const associate = this.findOne(id);
    const newAssociate = {
      ...associate,
      ...updateAssociateDto,
    };

    const index = this.associates.findIndex((associate) => associate.id === id);

    this.associates[index] = newAssociate;

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
