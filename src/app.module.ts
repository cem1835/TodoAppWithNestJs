import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { UsersModule } from './users/users.module';
import { env } from './environment';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot(env.mongodb.uri), TodoModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
