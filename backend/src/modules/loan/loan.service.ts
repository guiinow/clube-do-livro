import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { LoanEntity } from './entities/loan.entity';
@Injectable()
export class LoanService {
  private loans: LoanEntity[] = [];
  
  create(createLoanDto: CreateLoanDto) {
    const currentMaxId = this.loans[this.loans.length - 1]?.id || 0;
    
    const id = currentMaxId + 1;

    const loan = {
      id,
      ...createLoanDto,
    };

    this.loans.push(loan);
    return loan;
  }

  findAll() {
    return this.loans;
  }

  findOne(id: number) {
    const index = this.loans.findIndex((loan) => loan.id === id);
    
    return this.loans[index];
  }

  update(id: number, updateLoanDto: UpdateLoanDto) {
    const loan = this.findOne(id);
    const newLoan = {
      ...loan,
      ...updateLoanDto,
    };
    
    const index = this.loans.findIndex((loan) => loan.id === id);

    this.loans[index] = newLoan;
    return newLoan;
  }

  remove(id: number) {
    const index = this.loans.findIndex((loan) => loan.id === id); 

    if(index === -1) {
      throw new NotFoundException('Loan with this id does not exists')
    }
    this.loans.splice(index, 1);  

    return `This action removes a #${id} loan`;

  }
}
