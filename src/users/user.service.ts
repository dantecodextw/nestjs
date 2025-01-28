import { Injectable } from "@nestjs/common";

const usersList = [
    { name: "Anshul", age: 21 },
    { name: "Aniket", age: 22 },
]

@Injectable()
export class UserService {
    getUserList(name: string): Array<{ name: string, age: number }> {
        return name ? usersList.filter(data => (data.name).toLowerCase() === name.toLowerCase()) : usersList
    }

    createUser(body: { name: string, age: number }): object {
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