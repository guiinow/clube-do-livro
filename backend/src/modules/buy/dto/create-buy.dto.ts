import { IsDate, IsNumber, IsString} from 'class-validator';

export class CreateBuyDto {
    @IsNumber()
    id: any;

    @IsString()
    price: string;

    @IsDate()
    date: Date;
}
