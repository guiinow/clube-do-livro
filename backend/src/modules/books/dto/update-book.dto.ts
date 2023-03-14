import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';

export class UpdateBookDto extends PartialType(CreateBookDto) {
    buyinfo: number;
    title: string;
    author: string;
    description: string;
    publisher: string;
    cover: string;
}
