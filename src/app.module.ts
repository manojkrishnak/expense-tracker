import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ExpensesModule } from './expenses/expenses.module'
import keys from './config/keys';



@Module({
  imports: [MongooseModule.forRoot(keys.MONGO_URI), ExpensesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }




