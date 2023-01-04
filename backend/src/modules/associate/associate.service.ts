import { Injectable } from '@nestjs/common';
import { CreateAssociateDto } from './dto/create-associate.dto';
import { UpdateAssociateDto } from './dto/update-associate.dto';
import { AssociateEntity } from './entities/associate.entity';

@Injectable()
export class AssociateService {
  private associates: AssociateEntity[] = [];

  create(createAssociateDto: CreateAssociateDto) {
    const currentMaxId = this.associates[this.associates.length - 1]?.id || 0;

    const id = currentMaxId + 1;

    const newAssociate = {
      id,
      ...createAssociateDto,
    };

    this.associates.push(newAssociate);


    return newAssociate;
  }

  findAll() {
    return `This action returns all associate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} associate`;
  }

  update(id: number, updateAssociateDto: UpdateAssociateDto) {
    return `This action updates a #${id} associate`;
  }

  remove(id: number) {
    return `This action removes a #${id} associate`;
  }
}
