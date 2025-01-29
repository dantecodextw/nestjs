import { Body, Controller, DefaultValuePipe, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dtos/create-user.dto";
import User from "./interface/user.interface";

@Controller('user')
export class userController {
    constructor(private readonly userService: UserService) { }

    @Get()
    getUserList(
        @Query('name') name: string
    ): User[] {

        return this.userService.getUserList(name);
        // return [{ name: "anshul", age: 50 }]
    }

    @Post()
    createUser(@Body(new ValidationPipe({ whitelist: true })) body: CreateUserDto): User {
        return this.userService.createUser(body)
    }

    @Patch(':name')
    updateUser(
        @Param('name') name: string,
        @Body() body: { name?: string, age?: number }
    ): object {
        return this.userService.updateUser(name, body)
    }

    @Delete(':name')
    deleteUser(
        @Param('name') name: string
    ): object | void {
        return this.userService.deleteUser(name)
    }
}