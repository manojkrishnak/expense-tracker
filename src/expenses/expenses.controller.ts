import { Controller, Get, Post, Put, Delete, Body, Res, HttpStatus, HttpException, Logger } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { ExpensesService } from './expenses.service';
import { Expenses } from './interfaces/expenses.interface';


@Controller('expenses')
export class ExpensesController {
    private readonly logger = new Logger(ExpensesController.name);
    constructor(private expenseService: ExpensesService) { }
    @Get()
    sayHello() {
        return this.expenseService.hello()
    }

    @Get('all')
    async findAllRecords(@Res() res): Promise<Expenses[]> {
        const allExepenses = await this.expenseService.fetchAll();
        if (!allExepenses) {
            this.logger.error('No Data found')
            throw new HttpException({
                error: 'There is some error. Try later',
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        this.logger.log('Fetched all expenses')
        return res.status(HttpStatus.OK).json(
            {
                result: allExepenses,
                length: allExepenses.length
            }
        )
    }

    @Post('create')
    async create(@Res() res, @Body() createExpenseDto: CreateExpenseDto) {
        const expense = await this.expenseService.create(createExpenseDto);
        if (!expense) {
            this.logger.error('There is some problem in creating expense')
            throw new HttpException({
                error: 'There is some error. Try later',
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        this.logger.log('Created expense successfully')
        return res.status(HttpStatus.CREATED).json(expense)
    }

    @Put('update')
    async update(@Res() res, @Body() _id: string, @Body() createExpenseDto: CreateExpenseDto) {
        const updatedExpense = await this.expenseService.update(_id, createExpenseDto);
        if (!updatedExpense) {
            this.logger.error('Expense not found')
            throw new HttpException({
                error: 'Expense not found!',
            }, HttpStatus.NOT_FOUND);
        }
        this.logger.log('Updated expense successfully')
        return res.status(HttpStatus.OK).json(updatedExpense)
    }

    @Delete('delete')
    async delete(@Res() res, @Body() _id: string) {
        const deletedExpense = await this.expenseService.delete(_id);
        if (!deletedExpense) {
            this.logger.error('Expense not found')
            throw new HttpException({
                error: 'Expense not found!',
            }, HttpStatus.NOT_FOUND);
        }
        this.logger.log('Deleted expense successfully')
        return res.status(HttpStatus.OK).json(deletedExpense)
    }
}
