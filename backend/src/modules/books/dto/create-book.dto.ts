import {IsString, IsNumber, MinLength } from 'class-validator';

export class CreateBookDto {
    
    @IsNumber()
    id: number;

    @IsString()
    title: string;

    @IsString()
    author: string;

    @IsString()
    @MinLength(15)
    description: string;

    @IsString()
    publisher: string;

    //A definir: File Upload para 'capa do livro'

}
