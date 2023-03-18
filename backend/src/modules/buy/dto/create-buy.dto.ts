import { IsDate, IsNumber, IsString} from 'class-validator';

export class CreateBuyDto {
    @IsNumber()
    id: number;

    @IsString()
    price: string;

    @IsDate()
    date: Date;
}
