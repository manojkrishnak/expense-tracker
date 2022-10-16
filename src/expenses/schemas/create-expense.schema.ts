import * as mongoose from 'mongoose';

export const ExpensesSchema = new mongoose.Schema({
    name: String,
    amount: String,
    type: String,
    mode: String,
    purchaseDate: String,
    category: String
}, { timestamps: true })