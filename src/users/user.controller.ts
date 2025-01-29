import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('user')
export class userController {
    constructor(private readonly userService: UserService) { }

    @Get()
    getUserList(@Query() hello: { name?: string }): Array<{ name: string, age: number }> {
        const { name } = hello
        return this.userService.getUserList(name);
    }

    @Post()
    createUser(@Body() body: { name: string, age: number }): object {
        return this.userService.createUser(body)
    }

    // @Patch(':name')
    // updateUser(
    //     @Param('name') name: string,
    //     @Body() body: { name?: string, age?: number }
    // ): object {
    //     return this.userService.updateUser(name, body)
    // }

    @Put(':name')
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