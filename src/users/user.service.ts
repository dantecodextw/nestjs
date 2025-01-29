import { Injectable, ValidationPipe } from "@nestjs/common";
import { CreateUserDto } from "./dtos/create-user.dto";
import User from "./interface/user.interface";


const usersList: User[] = []

@Injectable()
export class UserService {
    getUserList(name: string): User[] {
        return name ? usersList.filter(data => (data.name).toLowerCase() === name.toLowerCase()) : usersList
    }

    createUser(body: CreateUserDto): User {
        const num = usersList.push(body)
        return usersList[num - 1]
    }

    updateUser(name: string, body: { name?: string, age?: number }): object {
        const index = usersList.findIndex(data => data.name.toLowerCase() === name.toLowerCase())
        if (index === -1) return { error: "User with the name does not exists" }

        usersList[index] = { ...usersList[index], ...body }
        return usersList[index]
    }

    deleteUser(name: string): object | void {
        const index = usersList.findIndex(data => data.name.toLowerCase() === name.toLowerCase())
        if (index === -1) return { error: "User with the name does not exists" }

        usersList.splice(index, 1)
    }
}