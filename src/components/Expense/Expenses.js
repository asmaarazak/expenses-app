import './Expenses.css';
import { useState } from 'react';
import Card from '../Card/Card';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021');

    const onFilterExpenseHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onFilterExpense={onFilterExpenseHandler} />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
}

export default Expenses;