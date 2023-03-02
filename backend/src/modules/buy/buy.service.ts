import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBuyDto } from './dto/create-buy.dto';
import { UpdateBuyDto } from './dto/update-buy.dto';
import { BuyEntity } from './entities/buy.entity';
@Injectable()
export class BuyService {
  private buys: BuyEntity[] = []; 
  
  create(createBuyDto: CreateBuyDto) {
    const currentMaxId = this.buys[this.buys.length - 1]?.id || 0;
    
    const id = currentMaxId + 1;

    const buy = {
      id,
      ...createBuyDto,
    };

    this.buys.push(buy);
    return buy;
  }

  findAll() {
    return this.buys;
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
