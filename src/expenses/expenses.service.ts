import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Expenses } from './interfaces/expenses.interface';

@Injectable()
export class ExpensesService {
    constructor(@InjectModel('Expenses') private readonly expensesModel: Model<Expenses>) { }

    hello() {
        return "Hello"
    }

    async create(expense: Expenses): Promise<Expenses> {
        const newExpense = new this.expensesModel(expense);
        return await newExpense.save()
    }

    async fetchAll(): Promise<Expenses[]> {
        return await this.expensesModel.find();
    }

    async update(id: string, expense: Expenses): Promise<Expenses> {
        return await this.expensesModel.findByIdAndUpdate(id, expense, { new: true })
    }

    async delete(id: string): Promise<Expenses> {
        return await this.expensesModel.findByIdAndDelete(id)
    }
}
