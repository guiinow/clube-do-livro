import {IsString, IsNumber, IsDate} from 'class-validator';

export class CreateLoanDto {

    @IsNumber()
    id: number;

    @IsNumber()
    associateId: number;

    @IsNumber()
    bookId: number;

    @IsNumber()
    amount: number;

    @IsNumber()
    interest: number;

    @IsNumber()
    duration: number;

    @IsString()
    status: string;

    @IsDate()
    createdAt: Date;

    @IsDate()
    updatedAt: Date;
}
