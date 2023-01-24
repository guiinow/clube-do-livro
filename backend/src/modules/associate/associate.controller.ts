import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AssociateService } from './associate.service';
import { CreateAssociateDto } from './dto/create-associate.dto';
import { UpdateAssociateDto } from './dto/update-associate.dto';

@Controller('associate')
export class AssociateController {
  constructor(private readonly associateService: AssociateService) {}

  @Post()
  create(@Body() createAssociateDto: CreateAssociateDto) {
    return this.associateService.create(createAssociateDto);
  }

  @Get()
  findAll() {
    return this.associateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.associateService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAssociateDto: UpdateAssociateDto,
  ) {
    return this.associateService.update(+id, updateAssociateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.associateService.remove(id);
  }
}
