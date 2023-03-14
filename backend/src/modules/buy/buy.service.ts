import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBuyDto } from './dto/create-buy.dto';
import { UpdateBuyDto } from './dto/update-buy.dto';
import { BuyEntity } from './entities/buy.entity';
@Injectable()
export class BuyService {
  constructor(@Inject('DATABASE_CONNECTION') private readonly connection: any) {}

  private buys: BuyEntity[] = []; 
  
  async create(createBuyDto: CreateBuyDto) {
    const result = await this.connection
    .query('INSERT INTO buy (id, price, date) VALUES ($1, $2, $3)', [
      createBuyDto.id,
      createBuyDto.price,
      createBuyDto.date,
    ])
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(err);
      return null;
    })

    return result.rows;
  }

  async findAll() {
    const result = await this.connection
    .query(`select * from buy`)
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(err);
      return null;
    });

    return result;
  }

  findOne(id: number) {
    const index = this.buys.findIndex((buy) => buy.id === id);
    return this.buys[index];
  }

  update(id: number, updateBuyDto: UpdateBuyDto) {
    const buy = this.findOne(id);
    const newBuy = {
      ...buy,
      ...updateBuyDto,
    };

    const index = this.buys.findIndex((buy) => buy.id === id);
   
    this.buys[index] = newBuy;
    
    return newBuy;
  }

  remove(id: number) {
    const index = this.buys.findIndex((buy) => buy.id === id);

    if(index === -1) {
      throw new NotFoundException('User with this id does not exists')
    }
    
    this.buys.splice(index, 1);

    return `This action removes a #${id} buy`;
  }
}
