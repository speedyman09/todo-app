import { Module } from '@nestjs/common';
import {TodoController} from "./controllers/todo.controller";
import {TodoService} from "./services/todo.service";
import {PrismaService} from "./services/prisma.service";

@Module({
  imports: [],
  controllers: [TodoController],
  providers: [TodoService, PrismaService],
})
export class TodoModule {}
