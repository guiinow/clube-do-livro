import { IsDate, IsString} from 'class-validator';

export class CreateBuyDto {
    @IsString()
    price: string;

    @IsDate()
    date: Date;
}
