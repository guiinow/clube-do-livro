import { PartialType } from '@nestjs/mapped-types';
import { CreateLoanDto } from './create-loan.dto';

export class UpdateLoanDto extends PartialType(CreateLoanDto) {
  associateId: number;
  bookId: number;
  amount: number;
  duration: number;
  status: string;
  createAt: Date;
  updateAt: Date;
}
