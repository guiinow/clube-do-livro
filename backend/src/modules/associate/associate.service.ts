import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAssociateDto } from './dto/create-associate.dto';
import { UpdateAssociateDto } from './dto/update-associate.dto';
import { AssociateEntity } from './entities/associate.entity';

@Injectable()
export class AssociateService {
  private associates: AssociateEntity[] = [];

  create(createAssociateDto: CreateAssociateDto) {
    const currentMaxId = this.associates[this.associates.length - 1]?.id || 0;

    const id = currentMaxId + 1;

    const associate = {
      id,
      ...createAssociateDto,
    };

    this.associates.push(associate);
    return associate;
  }

  findAll() {
    return this.associates;
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
