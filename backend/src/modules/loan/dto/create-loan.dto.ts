import {IsString, IsNumber, IsDate} from 'class-validator';

export class CreateLoanDto {
  @IsNumber()
  id: number;

  @IsNumber()
  associateId: number;

  @IsNumber()
  bookId: number;

  @IsNumber()
  duration: number;

  @IsString()
  status: string;

  @IsDate()
  createat: Date;

  @IsDate()
  updateat: Date;
}
