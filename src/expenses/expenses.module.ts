import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { ExpensesController } from './expenses.controller';
import { ExpensesService } from './expenses.service';
import { ExpensesSchema } from './schemas/create-expense.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Expenses', schema: ExpensesSchema }])],
    controllers: [ExpensesController],
    providers: [ExpensesService],
})
export class ExpensesModule { }
