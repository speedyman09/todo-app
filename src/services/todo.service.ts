import {Injectable} from "@nestjs/common";
import {Prisma} from "@prisma/client";
import {PrismaService} from "./prisma.service";
@Injectable()
export class TodoService {
    constructor(private prisma: PrismaService) {}
    async todo (todoWhereUniqueInput : Prisma.TodoWhereUniqueInput) {
        return this.prisma.todo.findUnique({
            where: todoWhereUniqueInput
        })
    }
    async createTodo(data: Prisma.TodoCreateInput) {
        return this.prisma.todo.create({
            data
        })
    }
}
