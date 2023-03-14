import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
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
  
  @Post('login')
  async login(@Body() body: { email: string, password: string }): Promise<any> {
    const { email, password } = body;
    return this.associateService.login(email, password);
  }
  

  @Get(':id')
  findOne(@Param('id') id: number) {
    const associate = this.associateService.findOne(id);
    if (!associate){
      throw new NotFoundException('Associate does not exist');
    }
    return associate;
    //return this.associateService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateAssociateDto: UpdateAssociateDto,
  ) {
    return this.associateService.update(id, updateAssociateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.associateService.remove(id);
  }
}
