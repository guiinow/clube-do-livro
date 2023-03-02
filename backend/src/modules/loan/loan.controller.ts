import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { LoanService } from './loan.service';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';

@Controller('loan')
export class LoanController {
  constructor(private readonly loanService: LoanService) {}

  @Post()
  create(@Body() createLoanDto: CreateLoanDto) {
    return this.loanService.create(createLoanDto);
  }

  @Get()
  findAll() {
    return this.loanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    const loan = this.loanService.findOne(id);
    if (!loan){
      throw new NotFoundException('Loan does not exist');
    }
    return loan;
  }

  @Patch(':id')
  update(@Param('id') id: number, 
  @Body() updateLoanDto: UpdateLoanDto
  ) {
    return this.loanService.update(id, updateLoanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.loanService.remove(id);
  }
}
