import {IsString, IsNumber, MinLength } from 'class-validator';

export class CreateBookDto {
    
    @IsNumber()
    id: number;

    @IsNumber()
    buyinfo: number;
    
    @IsString()
    title: string;

    @IsString()
    author: string;

    @IsString()
    @MinLength(15)
    description: string;

    @IsString()
    publisher: string;

    @IsString()
    cover: string;
    
}
