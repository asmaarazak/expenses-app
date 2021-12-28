import './Expenses.css';
import { useState } from 'react';
import Card from '../Card/Card';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const onFilterExpenseHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onFilterExpense={onFilterExpenseHandler} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
}

export default Expenses;