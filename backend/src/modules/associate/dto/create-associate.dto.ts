import { IsEmail, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateAssociateDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  address: string;

  @IsString()
  @MinLength(6)
  password: string;
}
