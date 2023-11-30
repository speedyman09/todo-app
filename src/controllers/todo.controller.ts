import {Body, Controller, HttpException, HttpStatus, Post} from "@nestjs/common";
import {TodoService} from "../services/todo.service";
import {Todo} from "@prisma/client";

@Controller()
export class TodoController {
    constructor(private readonly todoService : TodoService) {}

    @Post('/todo')
    async createTodo(@Body() body: Todo) {
        if (body.description && body.instruction) {
            return this.todoService.createTodo(body)
        }  else {
            throw new HttpException('Missing description or instruction', HttpStatus.BAD_REQUEST)
        }
    }
}