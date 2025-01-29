import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator"

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    name: string

    @IsNumber()
    age: number

    @IsString()
    @IsOptional()
    gender?: string

    @IsBoolean()
    isMarried: boolean
}